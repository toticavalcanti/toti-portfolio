import { Project, Service, Post, TimelineItem, SocialLink } from './types';

// Featured & All Projects
export const projects: Project[] = [
  {
    id: '1',
    title: 'Zé Ramalho - Jardim das Acácias',
    subtitle: 'Clipe Oficial | IA Generativa',
    description: 'Primeiro videoclipe oficial de Zé Ramalho produzido inteiramente com IA generativa. Trabalho com catálogo histórico, respeitando a obra original. Alcance orgânico massivo com milhões de visualizações acumuladas no YouTube.',
    category: 'clipe',
    tags: ['IA Generativa', 'Música', 'Pós-Produção', 'Direção Criativa'],
    thumbnail: 'https://i.ytimg.com/vi/hkJbYOjMi3o/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=hkJbYOjMi3o',
    featured: true,
    date: '2024-10-20',
  },
  {
    id: '2',
    title: 'Zé Ramalho - Canção Agalopada',
    subtitle: 'Clipe Oficial | Narrativa Complexa',
    description: 'Videoclipe oficial com narrativa visual sincronizada. Técnicas avançadas de IA para consistência de personagens e cenários ao longo de toda a produção. Alcance orgânico massivo consolidado no YouTube.',
    category: 'clipe',
    tags: ['IA Generativa', 'Música', 'Narrativa Visual', 'Pós-Produção'],
    thumbnail: 'https://i.ytimg.com/vi/wt5Au4CtdUA/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=wt5Au4CtdUA',
    featured: true,
    date: '2025-01-30',
  },
  {
    id: '3',
    title: 'Scarlett Finch',
    subtitle: 'Case Avançado de IA Aplicada',
    description: 'Personagem virtual completo em produção: identidade visual, voz sintética, música original, presença multiplataforma (YouTube, Instagram, TikTok, Pinterest). Sistema integrado de geração e publicação de conteúdo.',
    category: 'personagem',
    tags: ['IA Generativa', 'Voice Synthesis', 'Character Design', 'Produção Musical', 'Multiplataforma'],
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
    id: '6',
    title: 'Código Fluente',
    subtitle: 'Plataforma Educacional',
    description: 'Plataforma educacional completa com conteúdo técnico gratuito sobre programação, DevOps, Machine Learning. Tutoriais sobre JavaScript, Python, R, C, Go, Hadoop, K8s, redes neurais e mais.',
    category: 'educacao',
    tags: ['Educação', 'Programação', 'DevOps', 'Machine Learning'],
    thumbnail: '/projects/codigo-fluente.jpg',
    demoUrl: 'https://www.codigofluente.com.br',
    featured: false,
    date: '2024-ongoing',
  },
  {
    id: '7',
    title: 'Arte Generativa Aplicada',
    subtitle: 'Laboratório Criativo | IA + Curadoria',
    description: 'Projeto autoral explorando IA generativa, composição e identidade visual. Experimentação estética aplicada em produtos físicos. Não é loja — é laboratório de criação com aplicação prática.',
    category: 'experimento',
    tags: ['IA Generativa', 'Arte Digital', 'Design', 'Curadoria'],
    thumbnail: '/projects/arte-generativa-placeholder.jpg',
    demoUrl: 'https://www.redbubble.com/people/toticavalcanti',
    featured: false,
    date: '2024-ongoing',
  },
];

// Services
export const services: Service[] = [
  {
    id: '1',
    title: 'Desenvolvimento Web Full Stack',
    icon: 'Code',
    description: 'Sites institucionais, plataformas e e-commerce com Next.js. Arquitetura escalável, performance otimizada, integração de APIs. Do MVP ao produto final.',
    whatsIncluded: [
      'Sites e landing pages profissionais',
      'Plataformas web e dashboards',
      'E-commerce personalizado',
      'Integração de APIs e sistemas',
      'SEO técnico e performance',
    ],
    whoItsFor: [
      'Empresas que precisam de presença digital sólida',
      'Startups com produtos ambiciosos',
      'E-commerce e marketplaces',
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
    description: 'Assistentes conversacionais, automações de processo e integrações inteligentes. APIs modernas, LLMs e sistemas que reduzem custos operacionais.',
    whatsIncluded: [
      'Chatbots e agentes inteligentes',
      'Automação de processos repetitivos',
      'Integração de CRM, ERP, pagamentos',
      'Análise de dados e dashboards',
    ],
    whoItsFor: [
      'E-commerce com alto volume de atendimento',
      'Empresas com processos manuais',
      'Agências que precisam escalar',
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
    description: 'Videoclipes, avatares digitais e conteúdo para marcas usando IA generativa. Do roteiro à entrega final, com controle criativo e técnico.',
    whatsIncluded: [
      'Avatares digitais personalizados',
      'Videoclipes e conteúdo para redes sociais',
      'Criação de influencers virtuais',
      'Conteúdo para marcas e campanhas',
    ],
    whoItsFor: [
      'Artistas e músicos independentes',
      'Marcas que querem diferenciação criativa',
      'Criadores de conteúdo',
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
    description: 'Produção musical, trilhas e identidade sonora. Técnicas tradicionais combinadas com IA para resultados únicos. De singles a álbuns completos.',
    whatsIncluded: [
      'Produção musical completa',
      'Trilhas para vídeos e podcasts',
      'Identidade sonora para marcas',
      'Direção musical de álbuns',
    ],
    whoItsFor: [
      'Artistas independentes',
      'Marcas que precisam de identidade sonora',
      'Produtoras de conteúdo audiovisual',
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
    year: '2024-2025',
    title: 'IA Aplicada em Produção',
    description: 'Clipes com milhões de views, personagens virtuais, automações inteligentes. IA não como experimento, mas como ferramenta de produção.',
  },
  {
    year: '2020-2023',
    title: 'Full-Stack + Produção Musical',
    description: 'Desenvolvimento de plataformas profissionais. Produção musical híbrida combinando técnicas tradicionais e modernas.',
  },
  {
    year: '2015-2019',
    title: 'Fundação Técnica',
    description: 'Formação em Ciência da Computação e Música. Primeiros projetos profissionais em desenvolvimento e produção audiovisual.',
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
  title: 'Engenheiro × Criador × Diretor Técnico',
  bio: 'Bacharel em Ciência da Computação e Flauta Transversal. Mais de uma década construindo sistemas, conteúdo e experiências que integram código, IA e criação.',
  extendedBio: 'Formação dupla em tecnologia e música. Atuação em projetos que vão de videoclipes com milhões de views (Zé Ramalho) a desenvolvimento full-stack de plataformas profissionais (zeramalho.com.br), passando por personagens virtuais completos (Scarlett Finch) e produção musical híbrida.\n\nNão trabalho apenas com IA generativa. Trabalho com Next.js, DevOps, MLOps, APIs modernas — e combino tudo isso com produção audiovisual, narrativa e design.\n\nO resultado: sistemas que funcionam, conteúdo que engaja, projetos que entregam.',
  avatar: '/avatar.jpg',
  email: 'contato@toticavalcanti.com',
  whatsapp: '+5511999999999',
};
