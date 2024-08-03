export type OnboardQuestion = {
  id: string;
  title: string;
  options: string[];
};

export const questions: OnboardQuestion[] = [
  {
    id: 'q',
    title: '',
    options: [],
  },
  {
    id: 'q1',
    title: 'Onde você planeja montar seu jardim?',
    options: [
      'Em um apartamento',
      'Em uma casa com quintal',
      'Em um espaço externo (como uma varanda ou terraço)',
      'Em um ambiente interno (como um escritório ou sala)',
    ],
  },
  {
    id: 'q2',
    title: 'Qual é a quantidade de luz natural que o local recebe?',
    options: [
      'Sol direto o dia todo',
      'Luz indireta, mas ainda bastante clara',
      'Luz baixa (pouco ou nenhum sol direto)',
      'Não tenho certeza',
    ],
  },
  {
    id: 'q3',
    title: 'Qual é a temperatura média do ambiente?',
    options: [
      'Quente (acima de 25°C)',
      'Moderada (entre 15°C e 25°C)',
      'Fria (abaixo de 15°C)',
      'Não tenho certeza',
    ],
  },
  {
    id: 'q4',
    title: 'Qual é o tamanho do espaço disponível para as plantas?',
    options: [
      'Muito pequeno (como uma mesa ou uma pequena prateleira)',
      'Médio (uma pequena área ou estante)',
      'Grande (uma área ampla ou quintal)',
      'Não tenho certeza',
    ],
  },
  {
    id: 'q5',
    title: 'Com que frequência você pode cuidar das plantas?',
    options: [
      'Diariamente',
      'Semanalmente',
      'Mensalmente',
      'Não tenho certeza',
    ],
  },
  {
    id: 'q',
    title: '',
    options: [],
  },
];
