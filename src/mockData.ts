import { Project, Service, Post, TimelineItem, SocialLink } from './types';

// Featured & All Projects
export const projects: Project[] = [
  {
    id: '1',
    title: 'Zé Ramalho - Clipe Musical com IA',
    description: 'Clipe musical completo gerado com inteligência artificial, combinando música, narrativa visual e efeitos especiais.',
    category: 'clipe',
    tags: ['IA', 'Música', 'Vídeo', 'Arte Generativa'],
    thumbnail: '/projects/ze-ramalho.jpg',
    videoUrl: 'https://youtube.com/watch?v=example',
    featured: true,
    date: '2024-11-15',
  },
  {
    id: '2',
    title: 'Scarlett Finch - Personagem Virtual',
    description: 'Personagem virtual completa com personalidade, voz e presença nas redes sociais, criada inteiramente com IA.',
    category: 'personagem',
    tags: ['IA', 'Personagem', 'Redes Sociais', 'Voice AI'],
    thumbnail: '/projects/scarlett-finch.jpg',
    featured: true,
    date: '2024-10-20',
  },
  {
    id: '3',
    title: 'Banda Virtual - The AI Collective',
    description: 'Banda completa de músicos virtuais com identidades únicas, estilos musicais e dinâmica de grupo.',
    category: 'banda',
    tags: ['IA', 'Música', 'Banda', 'Colaboração'],
    thumbnail: '/projects/banda-virtual.jpg',
    featured: true,
    date: '2024-09-10',
  },
  {
    id: '4',
    title: 'SICOSI - Extensão de Sustentabilidade',
    description: 'Extensão de navegador que analisa produtos e sugere alternativas sustentáveis usando IA.',
    category: 'app',
    tags: ['Next.js', 'IA', 'Sustentabilidade', 'Chrome Extension'],
    thumbnail: '/projects/sicosi.jpg',
    githubUrl: 'https://github.com/toticavalcanti/sicosi',
    featured: false,
    date: '2024-08-05',
  },
  {
    id: '5',
    title: 'Experimento: Música Procedural',
    description: 'Sistema de geração de música procedural em tempo real usando algoritmos e IA.',
    category: 'experimento',
    tags: ['IA', 'Música', 'Algoritmos', 'Tempo Real'],
    thumbnail: '/projects/musica-procedural.jpg',
    featured: false,
    date: '2024-07-12',
  },
  {
    id: '6',
    title: 'Portfolio Interativo 3D',
    description: 'Portfolio pessoal com elementos 3D interativos e animações avançadas.',
    category: 'app',
    tags: ['React', 'Three.js', '3D', 'Web'],
    thumbnail: '/projects/portfolio-3d.jpg',
    demoUrl: 'https://codigofluente.studio',
    featured: false,
    date: '2024-06-18',
  },
];

// Services
export const services: Service[] = [
  {
    id: '1',
    title: 'Clipes Musicais com IA',
    icon: 'Music',
    description: 'Criação de videoclipes completos usando inteligência artificial, desde o conceito até a produção final.',
    whatsIncluded: [
      'Desenvolvimento de conceito criativo',
      'Geração de imagens e vídeos com IA',
      'Edição e pós-produção',
      'Sincronização com música',
      'Entrega em alta qualidade',
    ],
    whoItsFor: [
      'Artistas independentes',
      'Bandas emergentes',
      'Produtoras musicais',
      'Criadores de conteúdo',
    ],
    benefits: [
      'Custo reduzido comparado a produção tradicional',
      'Resultados únicos e inovadores',
      'Processo rápido e iterativo',
      'Estética futurista e diferenciada',
    ],
  },
  {
    id: '2',
    title: 'Personagens Virtuais',
    icon: 'User',
    description: 'Desenvolvimento de personagens virtuais completos com personalidade, voz e presença digital.',
    whatsIncluded: [
      'Design de personagem e identidade visual',
      'Criação de voz sintética personalizada',
      'Desenvolvimento de personalidade e backstory',
      'Geração de conteúdo para redes sociais',
      'Integração com plataformas digitais',
    ],
    whoItsFor: [
      'Marcas e empresas',
      'Influenciadores digitais',
      'Projetos de entretenimento',
      'Campanhas de marketing',
    ],
    benefits: [
      'Presença digital 24/7',
      'Controle total sobre a narrativa',
      'Escalabilidade de conteúdo',
      'Inovação e diferenciação de marca',
    ],
  },
  {
    id: '3',
    title: 'Desenvolvimento Full-Stack',
    icon: 'Code',
    description: 'Criação de aplicações web modernas, responsivas e escaláveis com as melhores tecnologias.',
    whatsIncluded: [
      'Arquitetura e planejamento técnico',
      'Desenvolvimento frontend (React/Next.js)',
      'Desenvolvimento backend (Node.js/APIs)',
      'Integração com bancos de dados',
      'Deploy e manutenção',
    ],
    whoItsFor: [
      'Startups',
      'Empresas estabelecidas',
      'Projetos pessoais ambiciosos',
      'Agências digitais',
    ],
    benefits: [
      'Código limpo e manutenível',
      'Performance otimizada',
      'SEO e acessibilidade',
      'Suporte e documentação completa',
    ],
  },
  {
    id: '4',
    title: 'Experimentos com IA',
    icon: 'Sparkles',
    description: 'Projetos experimentais explorando as fronteiras da inteligência artificial aplicada à arte e tecnologia.',
    whatsIncluded: [
      'Pesquisa e prototipagem',
      'Desenvolvimento de conceitos únicos',
      'Integração de múltiplas IAs',
      'Documentação do processo',
      'Apresentação de resultados',
    ],
    whoItsFor: [
      'Artistas digitais',
      'Pesquisadores',
      'Inovadores tecnológicos',
      'Curadores de arte',
    ],
    benefits: [
      'Exploração de novas possibilidades',
      'Resultados únicos e surpreendentes',
      'Aprendizado compartilhado',
      'Vanguarda tecnológica',
    ],
  },
];

// Blog Posts
export const posts: Post[] = [
  {
    id: '1',
    title: 'Como criar clipes musicais com IA: Um guia completo',
    excerpt: 'Descubra o processo completo de criação de videoclipes usando inteligência artificial, desde a concepção até a produção final.',
    content: 'Conteúdo completo do post...',
    date: '2024-11-01',
    author: 'Toti Cavalcanti',
    tags: ['IA', 'Tutorial', 'Música'],
    thumbnail: '/blog/clipes-ia.jpg',
  },
  {
    id: '2',
    title: 'O futuro dos personagens virtuais na era da IA',
    excerpt: 'Uma análise sobre como a inteligência artificial está revolucionando a criação de personagens digitais e influenciadores virtuais.',
    content: 'Conteúdo completo do post...',
    date: '2024-10-15',
    author: 'Toti Cavalcanti',
    tags: ['IA', 'Personagens', 'Futuro'],
    thumbnail: '/blog/personagens-futuro.jpg',
  },
  {
    id: '3',
    title: 'Next.js 15: Novidades e melhores práticas',
    excerpt: 'Explorando as novidades do Next.js 15 e como aplicá-las em projetos reais de produção.',
    content: 'Conteúdo completo do post...',
    date: '2024-09-20',
    author: 'Toti Cavalcanti',
    tags: ['Next.js', 'Web Dev', 'Tutorial'],
    thumbnail: '/blog/nextjs-15.jpg',
  },
];

// Timeline
export const timeline: TimelineItem[] = [
  {
    year: '2024',
    title: 'Código Fluente Studio',
    description: 'Fundação do estúdio focado em IA, música e desenvolvimento full-stack.',
  },
  {
    year: '2023',
    title: 'Primeiros Experimentos com IA',
    description: 'Início dos experimentos com geração de imagens, vídeos e música usando IA.',
  },
  {
    year: '2020',
    title: 'Desenvolvedor Full-Stack',
    description: 'Transição para desenvolvimento web profissional com foco em React e Node.js.',
  },
  {
    year: '2018',
    title: 'Produção Musical',
    description: 'Início da jornada na produção musical e criação de conteúdo audiovisual.',
  },
  {
    year: '2015',
    title: 'Primeiros Passos',
    description: 'Primeiros experimentos com programação e criação digital.',
  },
];

// Social Links
export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/toticavalcanti',
    icon: 'Github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/toticavalcanti',
    icon: 'Linkedin',
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com/@codigofluente',
    icon: 'Youtube',
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/codigofluente',
    icon: 'Instagram',
  },
];

// About Info
export const aboutInfo = {
  name: 'Toti Cavalcanti',
  title: 'Desenvolvedor Full-Stack & Criador com IA',
  bio: 'Sou um desenvolvedor full-stack apaixonado por explorar as interseções entre tecnologia, arte e inteligência artificial. No Código Fluente Studio, combino habilidades de programação com criatividade para desenvolver projetos únicos que vão desde aplicações web modernas até experimentos audiovisuais com IA.',
  extendedBio: 'Minha jornada começou com a curiosidade sobre como as coisas funcionam e evoluiu para uma paixão por criar experiências digitais inovadoras. Trabalho com tecnologias como React, Next.js, Node.js e TypeScript no desenvolvimento web, enquanto exploro ferramentas de IA generativa para criar música, vídeos e personagens virtuais. Acredito que estamos vivendo um momento único onde a tecnologia permite que criadores individuais realizem projetos que antes exigiriam equipes inteiras.',
  avatar: '/avatar.jpg',
  email: 'contato@codigofluente.studio',
  whatsapp: '+5511999999999',
};
