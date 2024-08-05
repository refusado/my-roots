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
    cO2absorption: 0.3,
    oxygen: 0.2,
    temperature: 0.5,
    humidity: 5,
    image:
      'https://blog.cobasi.com.br/wp-content/uploads/2023/07/AdobeStock_436265223.webp',
  },
  {
    id: '1',
    name: 'Zamioculca',
    description:
      'Ambiente interno, luz baixa, temperatura moderada, cuidado semanal',
    tags: ['interno', 'luz baixa', 'moderada', 'cuidado semanal'],
    cO2absorption: 0.2,
    oxygen: 0.15,
    temperature: 0.3,
    humidity: 3,
    image:
      'https://plantasecultivos.com/wp-content/uploads/2022/01/Zamioculcas-1-1.jpg',
  },
  {
    id: '2',
    name: 'Cacto',
    description:
      'Ambiente externo, sol direto, temperatura quente, cuidado mensal',
    tags: ['externo', 'sol direto', 'quente', 'cuidado mensal'],
    cO2absorption: 0.1,
    oxygen: 0.1,
    temperature: 0.2,
    humidity: 1,
    image:
      'https://dw0jruhdg6fis.cloudfront.net/producao/26031872/G/cacto-medio-com-espinhos-no-vaso-.webp',
  },
  {
    id: '3',
    name: 'Samambaia',
    description:
      'Ambiente interno, luz indireta, temperatura moderada, cuidado semanal',
    tags: ['interno', 'luz indireta', 'moderada', 'cuidado semanal'],
    cO2absorption: 0.4,
    oxygen: 0.3,
    temperature: 0.7,
    humidity: 10,
    image:
      'https://veiling.com.br/wp-content/uploads/2024/07/sam-americana-66a66ea106bd5.jpeg',
  },
  {
    id: '4',
    name: 'Lavanda',
    description:
      'Espaço externo, sol direto, temperatura quente, cuidado semanal',
    tags: ['externo', 'sol direto', 'quente', 'cuidado semanal'],
    cO2absorption: 0.3,
    oxygen: 0.25,
    temperature: 0.5,
    humidity: 2,
    image:
      'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2022/07/01/1451421885-15-tipos-de-lavanda-para-perfumar-seu-jardim-gardeningetc-kernock-park-plants.jpg',
  },
  {
    id: '5',
    name: 'Begônia',
    description:
      'Ambiente interno, luz indireta, temperatura fria, cuidado semanal',
    tags: ['interno', 'luz indireta', 'fria', 'cuidado semanal'],
    cO2absorption: 0.2,
    oxygen: 0.2,
    temperature: 0.4,
    humidity: 7,
    image:
      'https://s2.glbimg.com/5NEc4WdxQ2Xfz3tMwLNYC_egfwc=/620x455/e.glbimg.com/og/ed/f/original/2021/06/30/begonia-elatior.jpg',
  },
  {
    id: '6',
    name: 'Suculenta',
    description:
      'Ambiente interno e externo, luz indireta a direta, temperatura moderada a quente, cuidado mensal',
    tags: ['luz indireta a direta', 'moderada a quente', 'cuidado mensal'],
    cO2absorption: 0.1,
    oxygen: 0.1,
    temperature: 0.2,
    humidity: 1,
    image:
      'https://trexpets.com.br/8807-large_default/como-comprar-muda-de-suculenta-echeveria-laulensis-.jpg',
  },
  {
    id: '7',
    name: 'Planta Serpente',
    description:
      'Ambiente interno, luz baixa, temperatura moderada, cuidado mensal',
    tags: ['interno', 'luz baixa', 'moderada', 'cuidado mensal'],
    cO2absorption: 0.2,
    oxygen: 0.15,
    temperature: 0.4,
    humidity: 5,
    image:
      'https://i.pinimg.com/236x/60/01/72/600172c84e4f4e2747399b65acdcc817.jpg',
  },
  {
    id: '8',
    name: 'Peperômia',
    description:
      'Ambiente interno, luz indireta, temperatura moderada, cuidado semanal',
    tags: ['interno', 'luz indireta', 'moderada', 'cuidado semanal'],
    cO2absorption: 0.25,
    oxygen: 0.2,
    temperature: 0.3,
    humidity: 6,
    image:
      'https://images.tcdn.com.br/img/img_prod/350075/muda_de_peperomia_golden_cuia_21_16719_1_30e695542d0e62875b89e14fe7168b8a.jpg',
  },
  {
    id: '9',
    name: 'Árvore da Borracha',
    description:
      'Ambiente interno, luz indireta, temperatura moderada, cuidado mensal',
    tags: ['interno', 'luz indireta', 'moderada', 'cuidado mensal'],
    cO2absorption: 0.5,
    oxygen: 0.4,
    temperature: 0.6,
    humidity: 8,
    image:
      'https://www.jardineiro.net/wp-content/uploads/2015/12/ficus_elastica.jpg',
  },
  {
    id: '10',
    name: 'Filodendro',
    description:
      'Ambiente interno, luz indireta, temperatura moderada, cuidado semanal',
    tags: ['interno', 'luz indireta', 'moderada', 'cuidado semanal'],
    cO2absorption: 0.35,
    oxygen: 0.3,
    temperature: 0.4,
    humidity: 7,
    image:
      'https://images.tcdn.com.br/img/img_prod/762187/filodendro_birkin_pote_17_philodendron_birkin_347_1_b534869a6c50fc4e10e6d00dcea0c735.jpg',
  },
  {
    id: '11',
    name: 'Jiboia',
    description:
      'Ambiente interno, luz indireta a baixa, temperatura moderada, cuidado semanal',
    tags: ['interno', 'luz indireta a baixa', 'moderada', 'cuidado semanal'],
    cO2absorption: 0.3,
    oxygen: 0.25,
    temperature: 0.5,
    humidity: 6,
    image:
      'https://cdn.awsli.com.br/2500x2500/163/163535/produto/114269629/jiboia_planta_muda_jardim_exotico-z26gww1hse.jpg',
  },
  {
    id: '12',
    name: 'Hera Inglesa',
    description:
      'Ambiente interno e externo, luz indireta a direta, temperatura moderada, cuidado mensal',
    tags: [
      'interno',
      'externo',
      'luz indireta a direta',
      'moderada',
      'cuidado mensal',
    ],
    cO2absorption: 0.4,
    oxygen: 0.35,
    temperature: 0.6,
    humidity: 8,
    image:
      'https://mundonaturarte.com.br/wp-content/uploads/2019/10/gold-child-681x1024.jpg',
  },
  {
    id: '13',
    name: 'Calatéia',
    description:
      'Ambiente interno, luz indireta, temperatura moderada, cuidado semanal',
    tags: ['interno', 'luz indireta', 'moderada', 'cuidado semanal'],
    cO2absorption: 0.25,
    oxygen: 0.2,
    temperature: 0.4,
    humidity: 10,
    image:
      'https://images.tcdn.com.br/img/img_prod/762187/calateia_rubi_pote_12_calathea_sp_277_1_4a4ddc2c418a147b1f7c26be45a71224.jpg',
  },
  {
    id: '14',
    name: 'Crisântemo',
    description:
      'Ambiente externo, luz direta, temperatura moderada, cuidado semanal',
    tags: ['externo', 'luz direta', 'moderada', 'cuidado semanal'],
    cO2absorption: 0.35,
    oxygen: 0.3,
    temperature: 0.5,
    humidity: 4,
    image:
      'https://imagens-revista.vivadecora.com.br/uploads/2019/11/crisantemo.jpg',
  },
  {
    id: '15',
    name: 'Aloe Vera (Babosa)',
    description:
      'Ambiente externo, luz indireta, temperatura quente, cuidado mensal',
    tags: ['externo', 'luz indireta', 'quente', 'cuidado mensal'],
    cO2absorption: 0.15,
    oxygen: 0.12,
    temperature: 0.3,
    humidity: 2,
    image:
      'https://conteudo.imguol.com.br/c/entretenimento/28/2020/10/13/aloe-vera-1602609030013_v2_1637x1524.jpg',
  },
  {
    id: '16',
    name: 'Ficus Lyrata',
    description:
      'Ambiente interno, luz indireta a direta, temperatura moderada, cuidado semanal',
    tags: ['interno', 'luz indireta a direta', 'moderada', 'cuidado semanal'],
    cO2absorption: 0.45,
    oxygen: 0.35,
    temperature: 0.5,
    humidity: 6,
    image: 'https://weflores.com/wp-content/uploads/Ficus-Lyrata-P.jpg',
  },
  {
    id: '17',
    name: 'Antúrio',
    description:
      'Ambiente interno, luz indireta, temperatura quente, cuidado semanal',
    tags: ['interno', 'luz indireta', 'quente', 'cuidado semanal'],
    cO2absorption: 0.3,
    oxygen: 0.25,
    temperature: 0.4,
    humidity: 8,
    image:
      'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/09/21/1026225415-anturio-wikimedia-commons-sciencia58.jpg',
  },
  {
    id: '18',
    name: 'Maranta',
    description:
      'Ambiente interno, luz indireta, temperatura moderada, cuidado semanal',
    tags: ['interno', 'luz indireta', 'moderada', 'cuidado semanal'],
    cO2absorption: 0.2,
    oxygen: 0.18,
    temperature: 0.3,
    humidity: 9,
    image:
      'https://acdn.mitiendanube.com/stores/002/168/613/products/maranta-makoyana-11-f1bda1646844d6ef8916527367723893-1024-1024.png',
  },
  {
    id: '19',
    name: 'Bromélia',
    description:
      'Ambiente interno, luz indireta, temperatura quente, cuidado mensal',
    tags: ['interno', 'luz indireta', 'quente', 'cuidado mensal'],
    cO2absorption: 0.2,
    oxygen: 0.18,
    temperature: 0.3,
    humidity: 6,
    image:
      'https://cdn.awsli.com.br/600x450/2446/2446161/produto/229870812/20230817_090033-fotor-20230817153440-55xr6yw0uk.jpg',
  },
];
