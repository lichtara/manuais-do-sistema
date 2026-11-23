export const activationKeys = {
  clarity: {
    name: 'Expansão e Clareza',
    description: 'Explorar perspectivas, relações e possibilidades de compreensão.',
    response: 'Um espaço para observar relações, explorar outras perspectivas e reconhecer o que merece sua atenção.',
    question: 'O que deseja enxergar com mais clareza neste momento?',
    provisionalSymbol: false,
  },
  // Forma, mensagens e pergunta de Alinhamento e Equilíbrio em validação editorial.
  balance: {
    name: 'Alinhamento e Equilíbrio',
    description: 'Examinar prioridades, ritmos e necessidades de reorganização.',
    response: 'Um espaço para observar prioridades, ritmos e possibilidades de ajuste.',
    question: 'O que deseja reorganizar ou equilibrar?',
    provisionalSymbol: true,
  },
  action: {
    name: 'Ação e Manifestação',
    description: 'Transformar intenção em movimento e explorar sua concretização.',
    response: 'Dar forma ao movimento, da intenção à concretização.',
    question: 'O que você escolhe colocar em movimento para que sua intenção comece a ganhar forma?',
    provisionalSymbol: true,
  },
} as const;

export type ActivationKey = keyof typeof activationKeys;

export const activationSteps = [
  { id: 'entrada', label: 'Entrada' },
  { id: 'chaves', label: 'Chaves' },
  { id: 'resposta', label: 'Resposta' },
  { id: 'presenca', label: 'Presença' },
  { id: 'pergunta', label: 'Pergunta' },
  { id: 'caminhos', label: 'Caminhos' },
] as const;

export const explorationPaths = {
  observe: {
    name: 'Observar',
    description: 'Examinar a situação e distinguir o que aconteceu daquilo que você percebeu ou interpretou.',
    question: 'O que você sabe até agora e o que ainda precisa descobrir?',
    transition: 'A próxima experiência de observação ainda será desenvolvida.',
  },
  understand: {
    name: 'Compreender',
    description: 'Explorar perspectivas, critérios e conhecimentos que podem ampliar sua compreensão.',
    question: 'Que outras perspectivas podem ajudar a compreender esta questão?',
    transition: 'A próxima experiência Lumora ainda será desenvolvida.',
  },
  experiment: {
    name: 'Experimentar',
    description: 'Identificar um pequeno passo concreto para investigar uma possibilidade.',
    question: 'Qual é o menor próximo passo que você pode realizar?',
    transition: 'A conexão com Flux será desenvolvida em uma etapa posterior.',
  },
} as const;

export type ExplorationPath = keyof typeof explorationPaths;

export const activationThemes = [
  { id: 'situacao', label: 'Uma situação pessoal' },
  { id: 'decisao', label: 'Uma decisão' },
  { id: 'projeto', label: 'Um projeto' },
  { id: 'aprendizado', label: 'Um aprendizado' },
  { id: 'possibilidade', label: 'Uma possibilidade que desejo explorar' },
] as const;
