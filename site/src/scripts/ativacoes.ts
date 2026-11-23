import { activationKeys, activationSteps, activationThemes, type ActivationKey } from '../lib/ativacoes';

type Step = (typeof activationSteps)[number]['id'];
type View = { step: Step; finished: boolean };
type PauseState = 'idle' | 'running' | 'complete';
type FinishMode = 'nothing' | 'unsure' | 'register';
type Draft = { text: string; theme: string | null };
type Result = { mode: FinishMode; text: string; theme: string };

const root = document.querySelector<HTMLElement>('[data-activation]');
if (root) setupActivation(root);

function setupActivation(root: HTMLElement) {
  const find = <T extends HTMLElement = HTMLElement>(selector: string) => root.querySelector<T>(selector);
  const findAll = <T extends HTMLElement = HTMLElement>(selector: string) => [...root.querySelectorAll<T>(selector)];
  const panels = findAll('[data-step]');
  const steps = findAll('[data-progress-step]');
  const keyInputs = findAll<HTMLInputElement>('[name="chave"]');
  const confirmKey = find<HTMLButtonElement>('[data-confirm-key]');
  const questionPanel = find('[data-question-panel]');
  const finishPanel = find('[data-finish-panel]');
  const intention = find<HTMLTextAreaElement>('[data-intention]');
  const themes = findAll<HTMLButtonElement>('[data-theme]');
  const register = find<HTMLButtonElement>('[data-finish="register"]');
  const pause = find('[data-pause]');
  const pauseStart = find<HTMLButtonElement>('[data-pause-start]');
  const pauseStop = find<HTMLButtonElement>('[data-pause-stop]');
  const pauseContinue = find<HTMLButtonElement>('[data-pause-continue]');
  const pauseSkip = find<HTMLButtonElement>('[data-pause-skip]');
  const pauseStatus = find('[data-pause-status]');
  const drafts = new Map<ActivationKey, Draft>();
  const results = new Map<ActivationKey, Result>();

  let activeKey: ActivationKey | null = null;
  let view: View = { step: 'entrada', finished: false };
  let pauseState: PauseState = 'idle';
  let pauseTimer: number | undefined;

  function isKey(value: string | undefined): value is ActivationKey {
    return value !== undefined && Object.hasOwn(activationKeys, value);
  }

  function isStep(value: string | undefined): value is Step {
    return activationSteps.some(({ id }) => id === value);
  }

  function selectedKey() {
    const value = keyInputs.find(input => input.checked)?.value;
    return isKey(value) ? value : null;
  }

  function readHash() {
    const value = location.hash.slice(1);
    if (!value) return 'entrada';
    return isStep(value) ? value : null;
  }

  function writeHistory(next: View, mode: 'push' | 'replace') {
    const url = next.step === 'entrada' ? location.pathname + location.search : '#' + next.step;
    if (mode === 'push') history.pushState(next, '', url);
    else history.replaceState(next, '', url);
  }

  function resolveView(step: Step, finished = false): View {
    if (!activeKey && step !== 'entrada' && step !== 'chaves') return { step: 'chaves', finished: false };
    return { step, finished: step === 'pergunta' && finished && Boolean(activeKey && results.has(activeKey)) };
  }

  function setText(selector: string, value: string) {
    for (const target of findAll(selector)) target.textContent = value;
  }

  function renderKey(key: ActivationKey) {
    const details = activationKeys[key];
    for (const variant of findAll('[data-key-variant]')) variant.hidden = variant.dataset.keyVariant !== key;
    setText('[data-key-name]', details.name);
    setText('[data-key-response]', details.response);
    setText('[data-key-question]', details.question);
  }

  function readDraft(): Draft {
    return activeKey && drafts.get(activeKey) || { text: '', theme: null };
  }

  function updateDraft(draft: Draft) {
    if (activeKey) drafts.set(activeKey, draft);
    renderDraft();
  }

  function renderDraft() {
    const draft = readDraft();
    if (intention && intention.value !== draft.text) intention.value = draft.text;
    for (const button of themes) button.setAttribute('aria-pressed', String(button.dataset.theme === draft.theme));
    if (register) register.disabled = !draft.text.trim() && !draft.theme;
  }

  function renderResult(result: Result) {
    const messages = {
      register: 'Seu registro está disponível nesta sessão.',
      unsure: 'Sua pergunta pode ficar em aberto por agora.',
      nothing: 'Você concluiu a prévia sem registrar uma intenção.',
    };

    setText('[data-finish-message]', messages[result.mode]);
    setText('[data-finish-intention]', result.text);
    setText('[data-finish-theme]', result.theme);
    const textWrap = find('[data-finish-intention-wrap]');
    const themeWrap = find('[data-finish-theme-wrap]');
    if (textWrap) textWrap.hidden = !result.text;
    if (themeWrap) themeWrap.hidden = !result.theme;
  }

  function setPause(state: PauseState, message = '') {
    window.clearTimeout(pauseTimer);
    pauseState = state;
    if (pause) pause.dataset.state = state;
    if (pauseStart) pauseStart.hidden = state !== 'idle';
    if (pauseStop) pauseStop.hidden = state !== 'running';
    if (pauseContinue) pauseContinue.hidden = state !== 'complete';
    if (pauseSkip) pauseSkip.hidden = state === 'complete';
    if (pauseStatus) pauseStatus.textContent = message;
  }

  function startPause() {
    if (view.step !== 'presenca' || pauseState !== 'idle') return;
    setPause('running', 'A pausa começou. Observe o que chama sua atenção.');
    pauseStop?.focus();
    pauseTimer = window.setTimeout(() => {
      const hadPauseFocus = document.activeElement === pauseStop || document.activeElement === pauseSkip;
      setPause('complete', 'Pausa concluída. Continue quando quiser.');
      if (hadPauseFocus) pauseContinue?.focus();
    }, 10_000);
  }

  function show(next: View, moveFocus: boolean) {
    if (view.step === 'presenca' && next.step !== 'presenca' && pauseState === 'running') setPause('idle');
    view = next;

    for (const panel of panels) panel.hidden = panel.dataset.step !== view.step;
    if (questionPanel) questionPanel.hidden = view.finished;
    if (finishPanel) finishPanel.hidden = !view.finished;
    if (confirmKey) confirmKey.disabled = !selectedKey();
    if (activeKey) renderKey(activeKey);
    renderDraft();
    const result = activeKey && results.get(activeKey);
    if (view.finished && result) renderResult(result);

    const index = activationSteps.findIndex(({ id }) => id === view.step);
    setText('[data-step-label]', `Etapa ${index + 1} de ${activationSteps.length} · ${activationSteps[index].label}`);
    for (const step of steps) {
      if (step.dataset.progressStep === view.step) step.setAttribute('aria-current', 'step');
      else step.removeAttribute('aria-current');
    }

    if (moveFocus) {
      const panel = view.step === 'pergunta'
        ? (view.finished ? finishPanel : questionPanel)
        : panels.find(screen => screen.dataset.step === view.step);
      panel?.querySelector<HTMLElement>('h1')?.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }

  function go(step: Step, finished = false) {
    const next = resolveView(step, finished);
    if (next.step === view.step && next.finished === view.finished) return;
    writeHistory(next, 'push');
    show(next, true);
  }

  function confirm() {
    const key = selectedKey();
    if (!key) return;
    if (activeKey !== key) setPause('idle');
    activeKey = key;
    go('resposta');
  }

  function finish(mode: FinishMode) {
    if (view.step !== 'pergunta' || view.finished || !activeKey) return;
    const draft = readDraft();
    const text = mode === 'register' ? draft.text.trim() : '';
    const theme = mode === 'register'
      ? activationThemes.find(({ id }) => id === draft.theme)?.label ?? ''
      : '';
    if (mode === 'register' && !text && !theme) return;
    if (mode !== 'register') drafts.delete(activeKey);
    results.set(activeKey, { mode, text, theme });
    go('pergunta', true);
  }

  function restart() {
    activeKey = null;
    drafts.clear();
    results.clear();
    for (const input of keyInputs) input.checked = false;
    for (const variant of findAll('[data-key-variant]')) variant.hidden = true;
    setText('[data-key-name]', '');
    setText('[data-key-question]', '');
    setText('[data-key-response]', '');
    renderResult({ mode: 'nothing', text: '', theme: '' });
    setPause('idle');
    const next: View = { step: 'entrada', finished: false };
    writeHistory(next, 'replace');
    show(next, true);
  }

  function syncLocation() {
    const step = readHash();
    // Untouched fragments such as the skip link are anchors within the current step.
    if (!step) return;
    const finished = history.state?.step === step && history.state?.finished === true;
    const next = resolveView(step, finished);
    if (step !== next.step || finished !== next.finished) writeHistory(next, 'replace');
    if (view.step !== next.step || view.finished !== next.finished) show(next, true);
  }

  for (const input of keyInputs) input.addEventListener('change', () => {
    if (confirmKey) confirmKey.disabled = !selectedKey();
  });
  for (const button of findAll<HTMLButtonElement>('[data-go]')) button.addEventListener('click', () => {
    if (isStep(button.dataset.go)) go(button.dataset.go);
  });
  confirmKey?.addEventListener('click', confirm);
  pauseStart?.addEventListener('click', startPause);
  pauseStop?.addEventListener('click', () => {
    setPause('idle', 'Pausa interrompida.');
    pauseStart?.focus();
  });
  pauseContinue?.addEventListener('click', () => go('pergunta'));
  pauseSkip?.addEventListener('click', () => go('pergunta'));
  intention?.addEventListener('input', () => updateDraft({ ...readDraft(), text: intention.value }));
  for (const button of themes) button.addEventListener('click', () => {
    const draft = readDraft();
    const theme = button.dataset.theme;
    if (theme) updateDraft({ ...draft, theme: draft.theme === theme ? null : theme });
  });
  for (const button of findAll<HTMLButtonElement>('[data-finish]')) button.addEventListener('click', () => {
    const mode = button.dataset.finish;
    if (mode === 'nothing' || mode === 'unsure' || mode === 'register') finish(mode);
  });
  find('[data-restart]')?.addEventListener('click', restart);
  find('[data-edit-intention]')?.addEventListener('click', () => go('pergunta'));
  document.querySelector<HTMLAnchorElement>('.skip-link')?.addEventListener('click', (event) => {
    event.preventDefault();
    root.focus();
  });
  window.addEventListener('popstate', syncLocation);
  window.addEventListener('hashchange', syncLocation);

  const initial = resolveView(readHash() ?? 'entrada');
  writeHistory(initial, 'replace');
  show(initial, false);
}
