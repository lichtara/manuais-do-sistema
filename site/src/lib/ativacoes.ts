export const activationKeys = {
  clarity: {
    name: 'Expansão e Clareza',
    description: 'Explorar perspectivas, relações e possibilidades de compreensão.',
    response: 'Um espaço para observar relações, explorar outras perspectivas e reconhecer o que merece sua atenção.',
    question: 'O que deseja enxergar com mais clareza neste momento?',
    provisional: false,
  },
  // Forma, mensagens e pergunta de Alinhamento e Equilíbrio em validação editorial.
  balance: {
    name: 'Alinhamento e Equilíbrio',
    description: 'Examinar prioridades, ritmos e necessidades de reorganização.',
    response: 'Um espaço para observar prioridades, ritmos e possibilidades de ajuste.',
    question: 'O que deseja reorganizar ou equilibrar?',
    provisional: true,
  },
  // Forma e mensagens provisórias. “Manifestação e Precisão” também está em avaliação.
  action: {
    name: 'Manifestação e Ação',
    description: 'Explorar a passagem entre intenção, decisão e movimento concreto.',
    response: 'Um espaço para reconhecer uma intenção e explorar o próximo movimento concreto.',
    question: 'O que deseja colocar em movimento?',
    provisional: true,
  },
} as const;

export type ActivationKey = keyof typeof activationKeys;

export const activationSteps = [
  { id: 'entrada', label: 'Entrada' },
  { id: 'chaves', label: 'Chaves' },
  { id: 'resposta', label: 'Resposta' },
  { id: 'presenca', label: 'Presença' },
  { id: 'pergunta', label: 'Pergunta' },
] as const;

export const activationThemes = [
  { id: 'situacao', label: 'Uma situação pessoal' },
  { id: 'decisao', label: 'Uma decisão' },
  { id: 'projeto', label: 'Um projeto' },
  { id: 'aprendizado', label: 'Um aprendizado' },
  { id: 'possibilidade', label: 'Uma possibilidade que desejo explorar' },
] as const;
