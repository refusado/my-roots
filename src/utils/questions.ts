export type OnboardQuestion = {
  id: string;
  title: string;
  options: {
    text: string;
    tags: string[];
  }[];
};

export const questions: OnboardQuestion[] = [
  {
    id: 'q1',
    title: 'Onde você planeja montar seu jardim?',
    options: [
      { text: 'Em um apartamento', tags: ['interno'] },
      { text: 'Em uma casa com quintal', tags: ['externo'] },
      {
        text: 'Em um espaço externo (como uma varanda ou terraço)',
        tags: ['externo'],
      },
      {
        text: 'Em um ambiente interno (como um escritório ou sala)',
        tags: ['interno'],
      },
    ],
  },
  {
    id: 'q2',
    title: 'Qual é a quantidade de luz natural que o local recebe?',
    options: [
      { text: 'Sol direto o dia todo', tags: ['sol direto'] },
      {
        text: 'Luz indireta, mas ainda bastante clara',
        tags: ['luz indireta'],
      },
      { text: 'Luz baixa (pouco ou nenhum sol direto)', tags: ['luz baixa'] },
      { text: 'Não tenho certeza', tags: [] },
    ],
  },
  {
    id: 'q3',
    title: 'Qual é a temperatura média do ambiente?',
    options: [
      { text: 'Quente (acima de 25°C)', tags: ['quente'] },
      { text: 'Moderada (entre 15°C e 25°C)', tags: ['moderada'] },
      { text: 'Fria (abaixo de 15°C)', tags: ['fria'] },
      { text: 'Não tenho certeza', tags: [] },
    ],
  },
  {
    id: 'q4',
    title: 'Qual é o tamanho do espaço disponível para as plantas?',
    options: [
      {
        text: 'Muito pequeno (como uma mesa ou uma pequena prateleira)',
        tags: ['pequeno'],
      },
      { text: 'Médio (uma pequena área ou estante)', tags: ['médio'] },
      { text: 'Grande (uma área ampla ou quintal)', tags: ['grande'] },
      { text: 'Não tenho certeza', tags: [] },
    ],
  },
  {
    id: 'q5',
    title: 'Com que frequência você pode cuidar das plantas?',
    options: [
      { text: 'Diariamente', tags: ['cuidado diário'] },
      { text: 'Semanalmente', tags: ['cuidado semanal'] },
      { text: 'Mensalmente', tags: ['cuidado mensal'] },
      { text: 'Não tenho certeza', tags: [] },
    ],
  },
];
