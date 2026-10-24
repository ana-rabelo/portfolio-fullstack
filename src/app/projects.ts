export type ProjectCategory = 'Web' | 'APIs' | 'Dados' | 'Arquitetura';
export type ProjectFilter = 'Todos' | ProjectCategory;

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  url?: string;
  private?: boolean;
  status?: 'production' | 'case-study';
  preview: string;
  previewAlt: string;
  device?: 'desktop' | 'tablet' | 'phone';
}

export const projects: Project[] = [
  {
    id: 'legislativo',
    title: 'Sistema de Apoio Legislativo',
    category: 'Web',
    description: 'Plataforma para consulta e acompanhamento de matérias, sessões e atividades legislativas.',
    tags: ['Gestão legislativa', 'Portal web'],
    url: 'https://alemalegis.al.ma.leg.br/',
    status: 'production',
    preview: 'previews/legislativo.png',
    previewAlt: 'Captura do painel do Sistema de Apoio Legislativo, sem logotipo institucional',
    device: 'desktop'
  },
  {
    id: 'diarias',
    title: 'Sistema de Diárias',
    category: 'Web',
    description: 'Fluxos digitais para solicitação, acompanhamento e prestação de contas de viagens institucionais.',
    tags: ['Fluxos de trabalho', 'Gestão pública'],
    private: true,
    status: 'production',
    preview: 'previews/diarias.png',
    previewAlt: 'Prévia anonimizada do Sistema de Diárias',
    device: 'tablet'
  },
  {
    id: 'ponto',
    title: 'Sistema de Ponto Eletrônico',
    category: 'Web',
    description: 'Registro e acompanhamento de jornadas, com visão clara das marcações e do histórico.',
    tags: ['Jornada', 'Gestão de pessoas'],
    private: true,
    status: 'production',
    preview: 'previews/ponto-mobile.png',
    previewAlt: 'Adaptação para celular da tela do Sistema de Ponto Eletrônico',
    device: 'phone'
  },
  {
    id: 'insis',
    title: 'INSIS Project',
    category: 'Arquitetura',
    description: 'Estudo acadêmico de evolução de um sistema monolítico para serviços de avaliações, produtos e votos, explorando CQRS, eventos e mensageria.',
    tags: ['Java', 'Spring Boot', 'CQRS', 'RabbitMQ'],
    private: true,
    status: 'case-study',
    preview: 'previews/a68576-puzzle.webp',
    previewAlt: 'Peça de quebra-cabeça isométrica em 3D'
  },
  {
    id: 'imobiliaria',
    title: 'Imobiliária API',
    category: 'APIs',
    description: 'API de imóveis com validações, paginação e filtros dinâmicos construídos com JPA Criteria.',
    tags: ['Java', 'Spring Boot', 'JPA'],
    url: 'https://github.com/ana-rabelo/imobiliaria-api',
    preview: 'previews/1858b9-map-pin.webp',
    previewAlt: 'Marcador de localização isométrico em 3D'
  },
  {
    id: 'alfood',
    title: 'Alfood',
    category: 'Web',
    description: 'Interface de restaurante e cardápio com componentes React, TypeScript e integração com API.',
    tags: ['React', 'TypeScript', 'API'],
    url: 'https://github.com/ana-rabelo/alfood',
    preview: 'previews/abab3a-takeway-cup.webp',
    previewAlt: 'Copo para viagem isométrico em 3D'
  },
  {
    id: 'space',
    title: 'Space Django',
    category: 'Web',
    description: 'Galeria web sobre o espaço desenvolvida em Django com conteúdo da API Astronomy Picture of the Day da NASA.',
    tags: ['Python', 'Django', 'NASA API'],
    url: 'https://github.com/ana-rabelo/space-django',
    preview: 'previews/744cc0-rocket.webp',
    previewAlt: 'Foguete isométrico em 3D'
  },
  {
    id: 'escola',
    title: 'DRF Escola',
    category: 'APIs',
    description: 'API para alunos, cursos e matrículas com Django REST Framework.',
    tags: ['Python', 'Django REST', 'API'],
    url: 'https://github.com/ana-rabelo/drf-escola',
    preview: 'previews/628100-notebook.webp',
    previewAlt: 'Caderno isométrico em 3D'
  },
  {
    id: 'dados',
    title: 'Predição de preços',
    category: 'Dados',
    description: 'Desafio de ciência de dados com análise exploratória e regressão linear para estimar valores de aluguel.',
    tags: ['Python', 'Jupyter', 'Machine Learning'],
    url: 'https://github.com/ana-rabelo/LH_CD_ANA_PAULA',
    preview: 'previews/4a4275-chart.webp',
    previewAlt: 'Gráfico isométrico em 3D'
  },
  {
    id: 'money',
    title: 'Money Morph',
    category: 'APIs',
    description: 'Conversor de moedas em Java que consulta cotações em uma API externa.',
    tags: ['Java 21', 'API', 'CLI'],
    url: 'https://github.com/ana-rabelo/money-morph',
    preview: 'previews/7d956f-wallet.webp',
    previewAlt: 'Carteira isométrica em 3D'
  }
];

export function filterProjects(items: Project[], category: ProjectFilter): Project[] {
  return category === 'Todos' ? items : items.filter((project) => project.category === category);
}

export function partitionProjects(items: Project[], category: ProjectFilter): { production: Project[]; other: Project[] } {
  const filtered = filterProjects(items, category);
  return {
    production: filtered.filter((project) => project.status === 'production'),
    other: filtered.filter((project) => project.status !== 'production')
  };
}
