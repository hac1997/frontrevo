export const MOCK_MONTHLY_DATA: MonthlyData[] = [
  { month: 'Jan', events: 2, hours: 8 },
  { month: 'Fev', events: 1, hours: 4 },
  { month: 'Mar', events: 3, hours: 15 },
  { month: 'Abr', events: 2, hours: 10 },
  { month: 'Mai', events: 4, hours: 20 },
  { month: 'Jun', events: 2, hours: 12 },
  { month: 'Jul', events: 3, hours: 18 },
  { month: 'Ago', events: 1, hours: 6 },
  { month: 'Set', events: 2, hours: 14 },
  { month: 'Out', events: 3, hours: 16 },
  { month: 'Nov', events: 1, hours: 5 },
  { month: 'Dez', events: 0, hours: 0 }
];

export const MOCK_CATEGORY_STATS: CategoryStats[] = [
  { category: 'Meio Ambiente', events: 8, percentage: 33 },
  { category: 'Educação', events: 6, percentage: 25 },
  { category: 'Social', events: 5, percentage: 21 },
  { category: 'Saúde', events: 3, percentage: 13 },
  { category: 'Cultura', events: 2, percentage: 8 }
];

export const MOCK_ACHIEVEMENTS: Achievement[] = [
  { title: 'Primeira Missão', description: 'Completou seu primeiro evento', date: '15/01/2024', icon: '🎯' },
  { title: 'Dedicação', description: '10 eventos completados', date: '10/05/2024', icon: '⭐' },
  { title: 'Voluntário do Mês', description: 'Reconhecimento de destaque', date: '01/07/2024', icon: '🏆' },
  { title: 'Impacto Social', description: '100 horas voluntariadas', date: '22/09/2024', icon: '💚' }
];

export const MOCK_PAST_EVENTS: PastEvent[] = [
  {
    id: 1,
    title: 'Maratona Solidária 2024',
    organization: 'Corrida pela Vida',
    date: '15/08/2024',
    location: 'São Paulo, SP',
    hours: 8,
    category: 'Esportes',
    rating: 5,
    certificateAvailable: true,
    description: 'Apoio logístico e distribuição de água para corredores',
    role: 'Apoio Logístico'
  },
  {
    id: 2,
    title: 'Limpeza da Praia de Copacabana',
    organization: 'ONG Mar Limpo',
    date: '22/07/2024',
    location: 'Rio de Janeiro, RJ',
    hours: 6,
    category: 'Meio Ambiente',
    rating: 5,
    certificateAvailable: true,
    description: 'Mutirão de limpeza e conscientização ambiental',
    role: 'Voluntário Geral'
  },
  {
    id: 3,
    title: 'Festival de Música Comunitário',
    organization: 'Arte para Todos',
    date: '10/09/2024',
    location: 'Belo Horizonte, MG',
    hours: 10,
    category: 'Cultura',
    rating: 4,
    certificateAvailable: true,
    description: 'Organização de palco e atendimento ao público',
    role: 'Coordenador de Palco'
  },
  {
    id: 4,
    title: 'Doação de Alimentos - Campanha Natal',
    organization: 'Banco de Alimentos SP',
    date: '05/10/2024',
    location: 'São Paulo, SP',
    hours: 4,
    category: 'Social',
    rating: 5,
    certificateAvailable: false,
    description: 'Separação e empacotamento de cestas básicas',
    role: 'Voluntário Geral'
  },
  {
    id: 5,
    title: 'Aula de Reforço Escolar',
    organization: 'Instituto Educar',
    date: '18/06/2024',
    location: 'São Paulo, SP',
    hours: 3,
    category: 'Educação',
    rating: 5,
    certificateAvailable: true,
    description: 'Tutoria em matemática para crianças do ensino fundamental',
    role: 'Tutor'
  },
  {
    id: 6,
    title: 'Campanha de Vacinação Comunitária',
    organization: 'Secretaria Municipal de Saúde',
    date: '30/05/2024',
    location: 'Curitiba, PR',
    hours: 7,
    category: 'Saúde',
    rating: 4,
    certificateAvailable: true,
    description: 'Apoio na organização de filas e documentação',
    role: 'Apoio Administrativo'
  },
  {
    id: 7,
    title: 'Plantio de Mudas - Reflorestamento',
    organization: 'Instituto Verde Vida',
    date: '12/04/2024',
    location: 'São Paulo, SP',
    hours: 5,
    category: 'Meio Ambiente',
    rating: 5,
    certificateAvailable: true,
    description: 'Plantio de 200 mudas nativas na Serra da Cantareira',
    role: 'Voluntário Geral'
  },
  {
    id: 8,
    title: 'Workshop de Artesanato',
    organization: 'Centro Comunitário da Vila',
    date: '20/03/2024',
    location: 'São Paulo, SP',
    hours: 4,
    category: 'Cultura',
    rating: 4,
    certificateAvailable: true,
    description: 'Ensino de técnicas de artesanato para comunidade local',
    role: 'Instrutor'
  }
];

export const EVENT_CATEGORIES = ['Todas', 'Meio Ambiente', 'Educação', 'Saúde', 'Cultura', 'Esportes', 'Social'];


export const SEARCH_LOCATIONS = ['Todas', 'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Brasília', 'Curitiba'];


export const MOCK_SEARCH_EVENTS: SearchEvent[] = [
  {
    id: 1,
    title: 'Limpeza da Praia de Copacabana',
    organization: 'ONG Mar Limpo',
    date: '15/11/2025',
    location: 'Rio de Janeiro',
    category: 'Meio Ambiente',
    volunteers: 45,
    maxVolunteers: 60,
    description: 'Mutirão de limpeza das areias e conscientização ambiental'
  },
  {
    id: 2,
    title: 'Aula de Reforço para Crianças',
    organization: 'Instituto Educar',
    date: '20/11/2025',
    location: 'São Paulo',
    category: 'Educação',
    volunteers: 12,
    maxVolunteers: 20,
    description: 'Apoio escolar em matemática e português para ensino fundamental'
  },
  {
    id: 3,
    title: 'Maratona Solidária 2025',
    organization: 'Corrida pela Vida',
    date: '25/11/2025',
    location: 'São Paulo',
    category: 'Esportes',
    volunteers: 89,
    maxVolunteers: 100,
    description: 'Organização e apoio logístico da maratona beneficente'
  },
  {
    id: 4,
    title: 'Doação de Alimentos',
    organization: 'Banco de Alimentos SP',
    date: '18/11/2025',
    location: 'São Paulo',
    category: 'Social',
    volunteers: 34,
    maxVolunteers: 50,
    description: 'Arrecadação e distribuição de alimentos para famílias carentes'
  },
  {
    id: 5,
    title: 'Festival de Música Comunitário',
    organization: 'Arte para Todos',
    date: '30/11/2025',
    location: 'Belo Horizonte',
    category: 'Cultura',
    volunteers: 25,
    maxVolunteers: 40,
    description: 'Apoio na organização de festival musical gratuito'
  }
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  { id: 1, text: 'Novo evento disponível na sua área', time: '30min atrás' },
  { id: 2, text: 'Lembrete: Evento amanhã às 9h', time: '2h atrás' },
  { id: 3, text: 'Você recebeu um novo certificado', time: '5h atrás' }
];


export const MOCK_CERTIFICATES: Certificate[] = [
  {
    id: 1,
    eventName: 'Maratona Solidária 2024',
    organization: 'Corrida pela Vida',
    date: '15/08/2024',
    hours: 8,
    status: 'available',
    code: 'CERT-2024-001234'
  },
  {
    id: 2,
    eventName: 'Limpeza da Praia de Copacabana',
    organization: 'ONG Mar Limpo',
    date: '22/07/2024',
    hours: 6,
    status: 'available',
    code: 'CERT-2024-001235'
  },
  {
    id: 3,
    eventName: 'Festival de Música Comunitário',
    organization: 'Arte para Todos',
    date: '10/09/2024',
    hours: 10,
    status: 'available',
    code: 'CERT-2024-001236'
  },
  {
    id: 4,
    eventName: 'Doação de Alimentos - Campanha Natal',
    organization: 'Banco de Alimentos SP',
    date: '05/10/2024',
    hours: 4,
    status: 'processing',
    code: 'CERT-2024-001237'
  },
  {
    id: 5,
    eventName: 'Mutirão de Limpeza - Parque Ibirapuera',
    organization: 'Prefeitura de São Paulo',
    date: '20/10/2024',
    hours: 5,
    status: 'pending',
    code: 'CERT-2024-001238'
  }
];
