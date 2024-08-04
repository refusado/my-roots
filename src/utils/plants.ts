export type Plant = {
  id: string;
  name: string;
  description?: string;
  tags: string[];
  image?: string;
};
export const plants: Plant[] = [
  {
    id: '0',
    name: 'Orquídea',
    description:
      'Ambiente interno, luz indireta a alta, temperatura quente, cuidado semanal',
    tags: ['interno', 'luz indireta a alta', 'quente', 'cuidado semanal'],
    image: 'https://m.media-amazon.com/images/I/71UvcN6ET8L._AC_SX679_.jpg',
  },
  {
    id: '1',
    name: 'Zamioculca',
    description:
      'Ambiente interno, luz baixa, temperatura moderada, cuidado semanal',
    tags: ['interno', 'luz baixa', 'moderada', 'cuidado semanal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: '2',
    name: 'Cacto',
    description:
      'Ambiente externo, sol direto, temperatura quente, cuidado mensal',
    tags: ['externo', 'sol direto', 'quente', 'cuidado mensal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: '3',
    name: 'Samambaia',
    description:
      'Ambiente interno, luz indireta, temperatura moderada, cuidado semanal',
    tags: ['interno', 'luz indireta', 'moderada', 'cuidado semanal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: '4',
    name: 'Lavanda',
    description:
      'Espaço externo, sol direto, temperatura quente, cuidado semanal',
    tags: ['externo', 'sol direto', 'quente', 'cuidado semanal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: '5',
    name: 'Begônia',
    description:
      'Ambiente interno, luz indireta, temperatura fria, cuidado semanal',
    tags: ['interno', 'luz indireta', 'fria', 'cuidado semanal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: '6',
    name: 'Suculenta',
    description:
      'Ambiente interno e externo, luz indireta a direta, temperatura moderada a quente, cuidado mensal',
    tags: ['luz indireta a direta', 'moderada a quente', 'cuidado mensal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: '7',
    name: 'Planta Serpente',
    description:
      'Ambiente interno, luz baixa, temperatura moderada, cuidado mensal',
    tags: ['interno', 'luz baixa', 'moderada', 'cuidado mensal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
  },
];
