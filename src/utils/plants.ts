export type Plant = {
  name: string;
  description?: string;
  tags: string[];
  image?: string;
};

export const plants: Plant[] = [
  {
    name: 'Zamioculca',
    description:
      'Ambiente interno, luz baixa, temperatura moderada, cuidado semanal',
    tags: ['interno', 'luz baixa', 'moderada', 'cuidado semanal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    name: 'Cacto',
    description:
      'Ambiente externo, sol direto, temperatura quente, cuidado mensal',
    tags: ['externo', 'sol direto', 'quente', 'cuidado mensal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    name: 'Samambaia',
    description:
      'Ambiente interno, luz indireta, temperatura moderada, cuidado semanal',
    tags: ['interno', 'luz indireta', 'moderada', 'cuidado semanal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    name: 'Lavanda',
    description:
      'Espaço externo, sol direto, temperatura quente, cuidado semanal',
    tags: ['externo', 'sol direto', 'quente', 'cuidado semanal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    name: 'Begônia',
    description:
      'Ambiente interno, luz indireta, temperatura fria, cuidado semanal',
    tags: ['interno', 'luz indireta', 'fria', 'cuidado semanal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    name: 'Suculenta',
    description:
      'Ambiente interno e externo, luz indireta a direta, temperatura moderada a quente, cuidado mensal',
    tags: ['luz indireta a direta', 'moderada a quente', 'cuidado mensal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    name: 'Planta Serpente',
    description:
      'Ambiente interno, luz baixa, temperatura moderada, cuidado mensal',
    tags: ['interno', 'luz baixa', 'moderada', 'cuidado mensal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
  },
];

export type PlantOld = {
  name: string;
  properties: {
    local: number;
    luz: number;
    temperatura: number;
    tamanho: number;
    cuidados: number;
  };
};

export const plantsOld: PlantOld[] = [
  {
    name: 'Cacto',
    properties: {
      local: 0,
      luz: 3,
      temperatura: 1,
      tamanho: 0,
      cuidados: 2,
    },
  },
  {
    name: 'Lírio da Paz',
    properties: {
      local: 0,
      luz: 1,
      temperatura: 1,
      tamanho: 1,
      cuidados: 1,
    },
  },
  {
    name: 'Gerânio',
    properties: {
      local: 2,
      luz: 3,
      temperatura: 1,
      tamanho: 1,
      cuidados: 1,
    },
  },
  {
    name: 'Samambaia',
    properties: {
      local: 0,
      luz: 1,
      temperatura: 1,
      tamanho: 1,
      cuidados: 1,
    },
  },
  {
    name: 'Planta Serpente',
    properties: {
      local: 0,
      luz: 2,
      temperatura: 1,
      tamanho: 1,
      cuidados: 2,
    },
  },
];
