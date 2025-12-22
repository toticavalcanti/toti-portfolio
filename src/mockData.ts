import { Project, Service, Post, TimelineItem, SocialLink } from './types';

// Featured & All Projects
export const projects: Project[] = [
  {
    id: '1',
    title: 'Zé Ramalho - Jardim das Acácias',
    subtitle: '920K+ visualizações',
    description: 'Videoclipe oficial criado inteiramente com IA generativa e pós-produção profissional. Primeiro clipe de IA de Zé Ramalho, lançado em outubro/2024.',
    category: 'clipe',
    tags: ['IA Generativa', 'Música', 'Edição de Vídeo', 'Adobe Suite'],
    thumbnail: 'https://i.ytimg.com/vi/hkJbYOjMi3o/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=hkJbYOjMi3o',
    featured: true,
    date: '2024-10-20',
  },
  {
    id: '2',
    title: 'Zé Ramalho - Canção Agalopada',
    subtitle: '1.9M+ visualizações',
    description: 'Segundo videoclipe oficial com narrativa visual complexa sincronizada com a música. Técnicas avançadas de IA para manter consistência de personagens e cenários.',
    category: 'clipe',
    tags: ['IA Generativa', 'Música', 'Narrativa Visual', 'Pós-Produção'],
    thumbnail: 'https://i.ytimg.com/vi/wt5Au4CtdUA/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=wt5Au4CtdUA',
    featured: true,
    date: '2025-01-30',
  },
  {
    id: '3',
    title: 'Scarlett Finch - Influencer Virtual',
    subtitle: 'Personagem completa multiplataforma',
    description: 'Projeto completo de influencer digital: criação de persona, voz sintética, videoclipes, presença em redes sociais (YouTube, Instagram, TikTok, Pinterest). Workflow completo de produção de conteúdo com IA.',
    category: 'personagem',
    tags: ['IA Generativa', 'Voice Cloning', 'Character Design', 'Social Media'],
    thumbnail: 'https://i.ytimg.com/vi/FpzK-6zQmTU/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/@scarlettfinchofficial',
    demoUrl: 'https://www.instagram.com/scarlettfinchofficial/',
    featured: true,
    date: '2024-ongoing',
  },
  {
    id: '4',
    title: 'Site Oficial Zé Ramalho',
    subtitle: 'Desenvolvimento Full-Stack Completo',
    description: 'Website institucional completo desenvolvido em Next.js com backend integrado. Gestão de conteúdo, galeria de fotos, discografia, agenda de shows e área administrativa.',
    category: 'app',
    tags: ['Next.js', 'React', 'Full-Stack', 'CMS'],
    thumbnail: '/projects/zeramalho-site.jpg',
    demoUrl: 'https://www.zeramalho.com.br',
    featured: true,
    date: '2024',
  },
  {
    id: '5',
    title: 'Antologia 50 Anos - Zé Ramalho',
    subtitle: 'Produção Musical Híbrida',
    description: 'Álbum comemorativo com 22 faixas remasterizadas com técnicas inovadoras. Combinação de gravações tradicionais, MIDI sequencing e IA generativa. Produção de capa com IA + edição Photoshop.',
    category: 'producao-musical',
    tags: ['Produção Musical', 'IA Generativa', 'MIDI', 'Audio Engineering'],
    thumbnail: '/projects/antologia-50-anos.jpg',
    featured: true,
    date: '2025-upcoming',
  },
  {
    id: '6',
    title: 'Código Fluente',
    subtitle: 'Plataforma Educacional',
    description: 'Plataforma educacional completa com conteúdo técnico gratuito sobre programação, DevOps, Machine Learning. Tutoriais sobre JavaScript, Python, R, C, Go, Hadoop, K8s, redes neurais e mais.',
    category: 'educacao',
    tags: ['Educação', 'Programação', 'DevOps', 'Machine Learning'],
    thumbnail: '/projects/codigo-fluente.jpg',
    demoUrl: 'https://www.codigofluente.com.br',
    featured: true,
    date: '2024-ongoing',
  },
];

// Services
export const services: Service[] = [
  {
    id: '1',
    title: 'Desenvolvimento Web Full Stack',
    icon: 'Code',
    description: 'Crio sites institucionais, plataformas e e-commerce com Next.js. Arquitetura escalável, performance otimizada e integração de APIs. Do MVP ao produto final, com método e prazo definido.',
    whatsIncluded: [
      'Sites institucionais e landing pages',
      'Plataformas web e dashboards',
      'E-commerce personalizado',
      'Integrações de APIs e sistemas legados',
      'Otimização SEO técnica',
    ],
    whoItsFor: [
      'Startups e empresas',
      'Projetos digitais ambiciosos',
      'E-commerce e marketplaces',
      'Plataformas SaaS',
    ],
    benefits: [
      'Arquitetura escalável e moderna',
      'Performance otimizada (Core Web Vitals)',
      'Código limpo e manutenível',
      'Prazo e entrega definidos',
    ],
  },
  {
    id: '2',
    title: 'Automação e Inteligência Artificial',
    icon: 'Sparkles',
    description: 'Desenvolvo assistentes conversacionais, automações de fluxo e integrações inteligentes que reduzem custos operacionais. Trabalho com APIs modernas e modelos de IA para criar sistemas que escalam.',
    whatsIncluded: [
      'Assistentes com IA (chatbots, agentes)',
      'Automação de processos internos',
      'Integração de APIs (CRM, ERP, pagamentos)',
      'Análise de dados e dashboards inteligentes',
      'Consultoria em IA aplicada',
    ],
    whoItsFor: [
      'E-commerce e varejo',
      'Empresas de atendimento',
      'Agências e consultorias',
      'Projetos de inovação',
    ],
    benefits: [
      'Redução de custos operacionais',
      'Automação de tarefas repetitivas',
      'Integração com sistemas existentes',
      'Escalabilidade e eficiência',
    ],
  },
  {
    id: '3',
    title: 'Conteúdo Audiovisual Generativo',
    icon: 'Music',
    description: 'Produzo videoclipes, avatares digitais e conteúdo para marcas usando ferramentas de IA generativa. Do roteiro à entrega final, com controle criativo e técnico em cada etapa.',
    whatsIncluded: [
      'Avatares digitais personalizados',
      'Videoclipes e content para YouTube/redes',
      'Conteúdo para marcas e campanhas',
      'Influencers virtuais (criação e gestão)',
      'Roteirização e produção audiovisual',
    ],
    whoItsFor: [
      'Artistas e músicos',
      'Marcas e agências',
      'Criadores de conteúdo',
      'Projetos de entretenimento',
    ],
    benefits: [
      'Custo reduzido vs. produção tradicional',
      'Resultados únicos e inovadores',
      'Processo rápido e iterativo',
      'Diferenciação criativa',
    ],
  },
  {
    id: '4',
    title: 'Produção Musical Híbrida',
    icon: 'User',
    description: 'Produzo músicas, trilhas e identidade sonora para marcas e artistas. Combino técnicas tradicionais com IA para criar resultados únicos. Atuo em projetos que vão de singles a álbuns completos.',
    whatsIncluded: [
      'Produção musical (gravação, mixagem, master)',
      'Trilhas para vídeos e podcasts',
      'Identidade sonora para marcas',
      'Curadoria e direção musical',
      'Artistas virtuais (criação e lançamento)',
    ],
    whoItsFor: [
      'Artistas independentes',
      'Marcas e empresas',
      'Produtoras de conteúdo',
      'Projetos audiovisuais',
    ],
    benefits: [
      'Produção híbrida (tradicional + IA)',
      'Identidade sonora única',
      'Flexibilidade criativa',
      'Entrega profissional',
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
    title: 'Portfólio Profissional',
    description: 'Consolidação do portfólio focado em IA, música e desenvolvimento full-stack.',
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
    platform: 'Fake Soul Records',
    url: 'https://www.youtube.com/@FakeSoulRecords',
    icon: 'Youtube',
  },
  {
    platform: 'Código Fluente',
    url: 'https://www.codigofluente.com.br',
    icon: 'Youtube',
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/toticavalcanti',
    icon: 'Instagram',
  },
];

// About Info
export const aboutInfo = {
  name: 'Toti Cavalcanti',
  title: 'Criador Híbrido | Tech + Arte + IA',
  bio: 'Bacharel em Ciência da Computação e Flauta Transversal. Domino a convergência entre tecnologia, música e inteligência artificial para criar experiências impossíveis.',
  extendedBio: 'Minha formação dupla em Ciência da Computação e Música me posiciona em um espaço único: onde a profundidade técnica encontra a sensibilidade artística.\n\nEssa combinação permite que eu entregue projetos que vão desde videoclipes com milhões de views (Zé Ramalho: 2.8M+ total) até desenvolvimento full-stack de sites profissionais (zeramalho.com.br), passando por influencers virtuais completos (Scarlett Finch) e produção musical híbrida (Antologia 50 Anos - 22 faixas).\n\nNão trabalho apenas com IA generativa. Trabalho com Next.js, DevOps, K8s, MLOps, redes neurais - e combino tudo isso com produção musical, edição de vídeo e design. O resultado: transformo conhecimento técnico profundo em experiências criativas impossíveis.',
  avatar: '/avatar.jpg',
  email: 'contato@toticavalcanti.com',
  whatsapp: '+5511999999999',
};
