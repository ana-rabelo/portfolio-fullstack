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
}

export const projects: Project[] = [
  {
    id: 'insis',
    title: 'INSIS Project',
    category: 'Arquitetura',
    description: 'Estudo acadêmico de evolução de um sistema monolítico para serviços de avaliações, produtos e votos, explorando CQRS, eventos e mensageria.',
    tags: ['Java', 'Spring Boot', 'CQRS', 'RabbitMQ'],
    private: true
  },
  {
    id: 'chemistry',
    title: 'Chemistry Controle de Estoque',
    category: 'Web',
    description: 'Sistema para organizar estoque e requisições dos laboratórios de Química do IFMA.',
    tags: ['Spring Boot', 'MySQL', 'JavaScript'],
    url: 'https://github.com/ana-rabelo/ChemistryControleDeEstoque'
  },
  {
    id: 'imobiliaria',
    title: 'Imobiliária API',
    category: 'APIs',
    description: 'API de imóveis com validações, paginação e filtros dinâmicos construídos com JPA Criteria.',
    tags: ['Java', 'Spring Boot', 'JPA'],
    url: 'https://github.com/ana-rabelo/imobiliaria-api'
  },
  {
    id: 'alfood',
    title: 'Alfood',
    category: 'Web',
    description: 'Interface de restaurante e cardápio com componentes React, TypeScript e integração com API.',
    tags: ['React', 'TypeScript', 'API'],
    url: 'https://github.com/ana-rabelo/alfood'
  },
  {
    id: 'space',
    title: 'Space Django',
    category: 'Web',
    description: 'Galeria web sobre o espaço desenvolvida em Django com conteúdo da API Astronomy Picture of the Day da NASA.',
    tags: ['Python', 'Django', 'NASA API'],
    url: 'https://github.com/ana-rabelo/space-django'
  },
  {
    id: 'escola',
    title: 'DRF Escola',
    category: 'APIs',
    description: 'API para alunos, cursos e matrículas com Django REST Framework.',
    tags: ['Python', 'Django REST', 'API'],
    url: 'https://github.com/ana-rabelo/drf-escola'
  },
  {
    id: 'dados',
    title: 'Predição de preços',
    category: 'Dados',
    description: 'Desafio de ciência de dados com análise exploratória e regressão linear para estimar valores de aluguel.',
    tags: ['Python', 'Jupyter', 'Machine Learning'],
    url: 'https://github.com/ana-rabelo/LH_CD_ANA_PAULA'
  },
  {
    id: 'money',
    title: 'Money Morph',
    category: 'APIs',
    description: 'Conversor de moedas em Java que consulta cotações em uma API externa.',
    tags: ['Java 21', 'API', 'CLI'],
    url: 'https://github.com/ana-rabelo/money-morph'
  }
];

export function filterProjects(items: Project[], category: ProjectFilter): Project[] {
  return category === 'Todos' ? items : items.filter((project) => project.category === category);
}
