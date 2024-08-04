export type Plant = {
  id: string;
  name: string;
  description?: string;
  tags: string[];
  image?: string;
  cO2absorption: number; // Média de absorção anual de CO2 por ano (Kg)
  oxygen: number; // Média de produção de oxigênio por ano (Kg)
  temperature: number; // Média de impacto na redução da temperatura (°C)
  humidity: number; // Média de impacto no aumento da umidade (%)
};

export const plants: Plant[] = [
  {
    id: '0',
    name: 'Orquídea',
    description:
      'Ambiente interno, luz indireta a alta, temperatura quente, cuidado semanal',
    tags: ['interno', 'luz indireta a alta', 'quente', 'cuidado semanal'],
    image: 'https://m.media-amazon.com/images/I/71UvcN6ET8L._AC_SX679_.jpg',
    cO2absorption: 0.3,
    oxygen: 0.2,
    temperature: 0.5,
    humidity: 5,
  },
  {
    id: '1',
    name: 'Zamioculca',
    description:
      'Ambiente interno, luz baixa, temperatura moderada, cuidado semanal',
    tags: ['interno', 'luz baixa', 'moderada', 'cuidado semanal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
    cO2absorption: 0.2,
    oxygen: 0.15,
    temperature: 0.3,
    humidity: 3,
  },
  {
    id: '2',
    name: 'Cacto',
    description:
      'Ambiente externo, sol direto, temperatura quente, cuidado mensal',
    tags: ['externo', 'sol direto', 'quente', 'cuidado mensal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
    cO2absorption: 0.1,
    oxygen: 0.1,
    temperature: 0.2,
    humidity: 1,
  },
  {
    id: '3',
    name: 'Samambaia',
    description:
      'Ambiente interno, luz indireta, temperatura moderada, cuidado semanal',
    tags: ['interno', 'luz indireta', 'moderada', 'cuidado semanal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
    cO2absorption: 0.4,
    oxygen: 0.3,
    temperature: 0.7,
    humidity: 10,
  },
  {
    id: '4',
    name: 'Lavanda',
    description:
      'Espaço externo, sol direto, temperatura quente, cuidado semanal',
    tags: ['externo', 'sol direto', 'quente', 'cuidado semanal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
    cO2absorption: 0.3,
    oxygen: 0.25,
    temperature: 0.5,
    humidity: 2,
  },
  {
    id: '5',
    name: 'Begônia',
    description:
      'Ambiente interno, luz indireta, temperatura fria, cuidado semanal',
    tags: ['interno', 'luz indireta', 'fria', 'cuidado semanal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
    cO2absorption: 0.2,
    oxygen: 0.2,
    temperature: 0.4,
    humidity: 7,
  },
  {
    id: '6',
    name: 'Suculenta',
    description:
      'Ambiente interno e externo, luz indireta a direta, temperatura moderada a quente, cuidado mensal',
    tags: ['luz indireta a direta', 'moderada a quente', 'cuidado mensal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
    cO2absorption: 0.1,
    oxygen: 0.1,
    temperature: 0.2,
    humidity: 1,
  },
  {
    id: '7',
    name: 'Planta Serpente',
    description:
      'Ambiente interno, luz baixa, temperatura moderada, cuidado mensal',
    tags: ['interno', 'luz baixa', 'moderada', 'cuidado mensal'],
    image:
      'https://m.media-amazon.com/images/I/71x311i9AWL._AC_UF1000,1000_QL80_.jpg',
    cO2absorption: 0.2,
    oxygen: 0.15,
    temperature: 0.4,
    humidity: 5,
  },
];
