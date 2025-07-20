// filter categories

const obras = [
  {
    id: 'lobos',
    titulo: 'Lobos 1',
    ubicacion: 'Barrio Los Lobos – Mar del Plata, Buenos Aires, Argentina',
    superficie: '280m² cubiertos / 120m² semicubiertos',
    anio: '2023',
    descripcion: `Ubicada en el corazón del barrio Los Lobos, esta casa combina modernidad con naturaleza. Espacios abiertos, diseño minimalista y un enfoque sustentable.`,
    imagenes: [
      '/assets/images/lobos-1/L1-1.jpg',
      '/assets/images/lobos-1/L1-2.jpg',
      '/assets/images/lobos-1/1.jpg',
      '/assets/images/lobos-1/3.jpg',
      '/assets/images/lobos-1/4.jpg',
      '/assets/images/lobos-1/5.jpg',
      '/assets/images/lobos-1/6.jpg',
      '/assets/images/lobos-1/7.jpg',
      '/assets/images/lobos-1/8.jpg',
    ]
  },

  // Podés seguir agregando más objetos de obras acá.

  {
    id: 'lobos-2',
    titulo: 'Lobos 2',
    ubicacion: 'Barrio Los Lobos – Mar del Plata, Buenos Aires, Argentina',
    superficie: '280m² cubiertos / 120m² semicubiertos',
    anio: '2023',
    descripcion: `Ubicada en el corazón del barrio Los Lobos, esta casa combina modernidad con naturaleza. Espacios abiertos, diseño minimalista y un enfoque sustentable.`,
    imagenes: [
      '/assets/images/featured-3.png',
      '/assets/images/aurora2.jpg',
      '/assets/images/aurora.jpg',
      '/assets/images/hills.jpg',
      '/assets/images/greenMountain.jpg',
      '/assets/images/drone3.jpg',
    ]
  },
  {
    id: 'lobos-3',
    titulo: 'Lobos 3',
    ubicacion: 'Barrio Los Lobos – Mar del Plata, Buenos Aires, Argentina',
    superficie: '280m² cubiertos / 120m² semicubiertos',
    anio: '2023',
    descripcion: `Ubicada en el corazón del barrio Los Lobos, esta casa combina modernidad con naturaleza. Espacios abiertos, diseño minimalista y un enfoque sustentable.`,
    imagenes: [
      '/assets/images/featured-3.png',
      '/assets/images/aurora2.jpg',
      '/assets/images/aurora.jpg',
      '/assets/images/hills.jpg',
      '/assets/images/greenMountain.jpg',
      '/assets/images/drone3.jpg',
    ]
  },

  {
    id: 'rosales',
    titulo: 'Rosales',
    ubicacion: 'Barrio Tipantu – Mar del Plata, Buenos Aires, Argentina',
    superficie: '120 m² cubiertos / 25m² semicubiertos',
    anio: '2023',
    descripcion: `Ubicada en un entorno natural y sereno, esta vivienda en Tipantu es perfecta para familias jóvenes que valoran la rapidez de obra (completada en solo 4 meses) y un estilo de vida eco-friendly. ¡Una obra que refleja la nueva generación de la construcción en seco en Mar del Plata!`,
    imagenes: [
      '/assets/images/aurora2.jpg',
      '/assets/images/aurora.jpg',
      '/assets/images/featured-3.png',
      '/assets/images/hills.jpg',
      '/assets/images/greenMountain.jpg',
      '/assets/images/drone3.jpg',
    ]
  },

  {
    id: 'galicia',
    titulo: 'Galicia',
    ubicacion: 'Barrio Tipantu – Mar del Plata, Buenos Aires, Argentina',
    superficie: '120 m² cubiertos / 25m² semicubiertos',
    anio: '2023',
    descripcion: `Ubicada en un entorno natural y sereno, esta vivienda en Tipantu es perfecta para familias jóvenes que valoran la rapidez de obra (completada en solo 4 meses) y un estilo de vida eco-friendly. ¡Una obra que refleja la nueva generación de la construcción en seco en Mar del Plata!`,
    imagenes: [
      '/assets/images/aurora2.jpg',
      '/assets/images/aurora.jpg',
      '/assets/images/featured-3.png',
      '/assets/images/hills.jpg',
      '/assets/images/greenMountain.jpg',
      '/assets/images/drone3.jpg',
    ]
  },
];

const categories = [
  {
    name: 'Playa los Lobos',
    filter: 'playaloslobos',
    cover: 'wave.jpg'
  },
  {
    name: 'Tipantu',
    filter: 'tipantu',
    cover: 'wedding1.jpg'
  },
  {
    name: 'Portrait',
    filter: 'portrait',
    cover: 'portrait1.jpg'
  },
  {
    name: 'Wedding',
    filter: 'wedding',
    cover: 'wedding3.jpg'
  },
  {
    name: 'Drone',
    filter: 'drone',
    cover: 'drone1.jpg'
  },
  {
    name: 'Birds',
    filter: 'birds',
    cover: 'bird1.jpg' // solo si tenés esa imagen
  },
];


const images = [
  {
    id: '1',
    url: 'wave.jpg',
    category: 'playaloslobos',
    title: 'Wave',
  },
  {
    id: '2',
    url: 'aurora.jpg',
    category: 'playaloslobos',
    title: 'Aurora',
  },
  {
    id: '3',
    url: 'wedding2.jpg',
    category: 'tipantu',
    title: 'Wedding 2',
  },
  {
    id: '4',
    url: 'seadrone.jpg',
    category: 'drone',
    title: 'Beach and Sea from drone',
  },
  {
    id: '5',
    url: 'mountain.jpg',
    category: 'landscape',
    title: 'Mountain',
  },
  {
    id: '6',
    url: 'roaddrone.jpg',
    category: 'drone',
    title: 'Road from Drone',
  },
  {
    id: '7',
    url: 'portrait1.jpg',
    category: 'portrait',
    title: 'Portrait 1',
  },
  {
    id: '8',
    url: 'wedding1.jpg',
    category: 'tipantu',
    title: 'Wedding 1',
  },
  {
    id: '9',
    url: 'hills.jpg',
    category: 'landscape',
    title: 'Hills',
  },
  {
    id: '11',
    url: 'portrait2.jpg',
    category: 'portrait',
    title: 'Portrait 2',
  },
  {
    id: '12',
    url: 'lake.jpg',
    category: 'landscape',
    title: 'Lake',
  },
  {
    id: '13',
    url: 'landscape01.jpg',
    category: 'landscape',
    title: 'Landscape lake',
  },
  {
    id: '14',
    url: 'landscapeSnow.jpg',
    category: 'landscape',
    title: 'Mountain Snowy',
  },
  {
    id: '15',
    url: 'aurora2.jpg',
    category: 'landscape',
    title: 'Aurora2',
  },
  {
    id: '16',
    url: 'greenMountain.jpg',
    category: 'landscape',
    title: 'Mountain Green',
  },
  {
    id: '17',
    url: 'portrait3.jpg',
    category: 'portrait',
    title: 'Portrait 3',
  },
  {
    id: '18',
    url: 'portrait4.jpg',
    category: 'portrait',
    title: 'Portrait 4',
  },
  {
    id: '19',
    url: 'portrait5.jpg',
    category: 'portrait',
    title: 'Portrait 5',
  },
  {
    id: '20',
    url: 'portrait6.jpg',
    category: 'portrait',
    title: 'Portrait 6',
  },
  {
    id: '21',
    url: 'portrait7.jpg',
    category: 'portrait',
    title: 'Portrait 7',
  },
  {
    id: '22',
    url: 'wedding3.jpg',
    category: 'wedding',
    title: 'Wedding ',
  },
  {
    id: '23',
    url: 'wedding4.jpg',
    category: 'wedding',
    title: 'Wedding ',
  },
  {
    id: '24',
    url: 'wedding5.jpg',
    category: 'wedding',
    title: 'Wedding ',
  },
  {
    id: '25',
    url: 'wedding6.jpg',
    category: 'wedding',
    title: 'Wedding ',
  },
  {
    id: '26',
    url: 'drone1.jpg',
    category: 'drone',
    title: 'Drone 1',
  },
  {
    id: '27',
    url: 'drone2.jpg',
    category: 'drone',
    title: 'Drone 2',
  },
  {
    id: '28',
    url: 'drone3.jpg',
    category: 'drone',
    title: 'Drone 3',
  },
  {
    id: '29',
    url: 'drone4.jpg',
    category: 'drone',
    title: 'Drone 4',
  },
  {
    id: '30',
    url: 'drone5.jpg',
    category: 'drone',
    title: 'Drone 5',
  },
];
