import {
  Event,
  Volunteer,
  Group,
  VolunteerData,
  OrganizationData,
  FeedItem,
  Notification,
  MonthlyData,
  CategoryStats,
  Achievement,
  Certificate,
  PastEvent,
  OpenEvent,
  ClosedEvent,
  RecentOrganizationEvent,
  EventParticipant,
  SearchVolunteer,
  SearchEvent,
  OrganizationMonthlyData,
  OrganizationCategoryStats,
  TopVolunteer,
  NewsArticle
} from '../types';

export const DUMMY_NEWS: NewsArticle[] = [
  {
    id: 101,
    title: 'Voluntariado 5.0: Como a IA Transforma a Gestão de Causas',
    body: 'Descubra como novas tecnologias estão otimizando o recrutamento e a coordenação de voluntários em todo o mundo.',
    imageUrl: 'https://placehold.co/600x400/10B981/ffffff?text=IA+e+Voluntariado',
    publishDate: '10 de Setembro',
    newsType: 'Announcement',
    eventTags: [],
  },
  {
    id: 102,
    title: 'Sucesso no Mutirão de Limpeza da Orla da Praia Central',
    body: 'Mais de 300 voluntários se reuniram no último sábado, retirando toneladas de resíduos e promovendo a conscientização ambiental.',
    imageUrl: 'https://placehold.co/600x400/3B82F6/ffffff?text=Limpeza+de+Praia',
    publishDate: '05 de Agosto',
    newsType: 'Announcement',
    eventTags: [],
  },
  {
    id: 103,
    title: 'Novas Parcerias: Ongs Locais Fortalecem a Rede',
    body: 'Anunciamos uma nova rodada de parcerias com organizações que atuam na periferia, ampliando o alcance das nossas ações.',
    imageUrl: 'https://placehold.co/600x400/F59E0B/ffffff?text=Parcerias+Comunitárias',
    publishDate: '28 de Julho',
    newsType: 'Announcement',
    eventTags: [],
  },
  {
    id: 104,
    title: 'A Importância do Tempo: Transforme Suas Horas em Impacto Real',
    body: 'Um guia prático para quem deseja começar a fazer trabalho voluntário, mas não sabe por onde começar a dedicar seu tempo.',
    imageUrl: 'https://placehold.co/600x400/EF4444/ffffff?text=Impacto+do+Tempo',
    publishDate: '15 de Julho',
    newsType: 'Announcement',
    eventTags: [],
  },
  {
    id: 105,
    title: 'Destaque: Voluntária do Mês Compartilha Sua Trajetória',
    body: 'Conheça a história inspiradora de Ana Clara, que dedicou mais de 200 horas a projetos educacionais neste ano.',
    imageUrl: 'https://placehold.co/600x400/8B5CF6/ffffff?text=Voluntária+Destaque',
    publishDate: '01 de Junho',
    newsType: 'Announcement',
    eventTags: [],
  },
];

export const GENDER_OPTIONS = [
  { value: 'Feminino', label: 'Feminino' },
  { value: 'Masculino', label: 'Masculino' },
  { value: 'Outro', label: 'Outro' },
  { value: 'Prefiro não informar', label: 'Prefiro não informar' },
];

export const STEP_LABELS = ['Acesso', 'Pessoal', 'Causas', 'Termos'];

export const SOCIAL_PROVIDERS = [
  {
    name: 'Google',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png',
  },
  {
    name: 'Facebook',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg',
  },
];


export const preferenceTags = [
    { id: 'causa_animal', label: '🐾 #CausaAnimal' },
    { id: 'meio_ambiente', label: '🌳 #MeioAmbiente' },
    { id: 'mutirao_limpeza', label: '🧹 #MutirãoDeLimpeza' },
    { id: 'inclusao_social', label: '🤝 #InclusãoSocial' },
    { id: 'eventos_culturais', label: '🎭 #EventosCulturais' },
    { id: 'eventos_sociais', label: '🎉 #EventosSociais' },
    { id: 'eventos_educativos', label: '📚 #EventosEducativos' },
    { id: 'sustentabilidade', label: '♻️ #Sustentabilidade' },
    { id: 'caridade', label: '❤️ #Caridade' },
    { id: 'diversidade_inclusao', label: '🌍 #DiversidadeEInclusão' },
    { id: 'oficinas_comunitarias', label: '🛠️ #OficinasComunitárias' },
    { id: 'ajuda_humanitaria', label: '🌐 #AjudaHumanitária' },
    { id: 'doacao_roupas', label: '👕 #DoaçãoDeRoupas' },
    { id: 'combate_fome', label: '🍽️ #CombateÀFome' },
    { id: 'saude_mental', label: '🧠 #SaúdeMental' },
    { id: 'apoio_escolar', label: '🧑‍🏫 #ApoioEscolar' },
];

export const DUMMY_EVENTS: Event[] = [
  { id: 1, name: 'Maratona Solidária', date: '25/10/2026', description: 'Ajude a organizar a maratona anual de arrecadação de fundos.', isEmergency: false },
  { id: 2, name: 'Festival de Arte Urbana', date: '12/11/2026', description: 'Participe da montagem e gestão de estandes no festival de arte da cidade.', isEmergency: false },
  { id: 3, name: 'Mutirão de Limpeza', date: '01/12/2026', description: 'Ajude a limpar a orla da praia após a temporada de férias.', isEmergency: true },
  { id: 4, name: 'Doação de Agasalhos', date: '15/12/2026', description: 'Recolha e distribuição de roupas e cobertores para pessoas em situação de rua.', isEmergency: true },
  { id: 5, name: 'Oficina de Programação para Jovens', date: '05/11/2026', description: 'Ensinar fundamentos de codificação para adolescentes da comunidade.', isEmergency: true },
];

export const DUMMY_VOLUNTEERS: Volunteer[] = [
  { id: 101, name: 'Ana Silva', email: 'ana.s@email.com', group: 'Limpeza Urbana' },
  { id: 102, name: 'João Santos', email: 'joao.s@email.com', group: 'Logística' },
  { id: 103, name: 'Maria Oliveira', email: 'maria.o@email.com', group: 'Atendimento' },
];

export const DUMMY_GROUPS: Group[] = [
  { id: 1, name: 'Limpeza Urbana', members: 15 },
  { id: 2, name: 'Logística', members: 8 },
  { id: 3, name: 'Atendimento', members: 12 },
];

export const MOCK_VOLUNTEER_DATA: VolunteerData = {
  name: 'Maria Silva',
  email: 'maria.silva@email.com',
  phone: '(11) 98765-4321',
  address: 'Rua das Flores, 123 - São Paulo, SP',
  totalEvents: 24,
  hoursVolunteered: 156,
  points: 2400
};

export const MOCK_ORGANIZATION_DATA: OrganizationData = {
  name: 'Instituto Ação Social',
  totalEvents: 45,
  activeEvents: 8,
  totalVolunteers: 342,
  hoursGenerated: 2840
};

export const MOCK_FEED_ITEMS: FeedItem[] = [
  {
    id: 1,
    type: 'event',
    title: 'Novo Evento: Plantio de Árvores na Mata Atlântica',
    content: 'Junte-se a nós no próximo sábado para um dia de conexão com a natureza! Vamos plantar 500 mudas nativas e contribuir para a recuperação da Mata Atlântica.',
    author: 'Instituto Verde Vida',
    date: '2h atrás',
    likes: 124,
    comments: 18,
    category: 'Meio Ambiente',
    location: 'São Paulo',
    eventDate: '18/11/2025',
    image: '/bg1.jpeg'
  },
  {
    id: 2,
    type: 'news',
    title: 'Campanha Arrecada 10 Toneladas de Alimentos',
    content: 'A campanha de arrecadação de alimentos deste mês foi um sucesso! Graças ao apoio de mais de 200 voluntários, conseguimos coletar 10 toneladas de alimentos que serão distribuídos para famílias em situação de vulnerabilidade.',
    author: 'Banco de Alimentos Nacional',
    date: '5h atrás',
    likes: 342,
    comments: 45
  },
  {
    id: 3,
    type: 'achievement',
    title: 'Você Desbloqueou uma Nova Conquista! 🏆',
    content: 'Parabéns! Você completou 20 eventos de voluntariado e ganhou o badge "Dedicação Exemplar". Continue fazendo a diferença!',
    author: 'Sistema REVO',
    date: '1 dia atrás',
    likes: 89,
    comments: 12
  },
  {
    id: 4,
    type: 'event',
    title: 'Festival Cultural Comunitário - Voluntários Necessários',
    content: 'Estamos organizando o maior festival cultural da região e precisamos de voluntários para apoio em diversas áreas: logística, atendimento ao público, fotografia e mais!',
    author: 'Coletivo Arte & Cultura',
    date: '1 dia atrás',
    likes: 198,
    comments: 34,
    category: 'Cultura',
    location: 'Rio de Janeiro',
    eventDate: '25/11/2025'
  },
  {
    id: 5,
    type: 'news',
    title: 'Novo Programa de Capacitação para Voluntários',
    content: 'Estamos lançando cursos gratuitos para capacitação de voluntários em áreas como primeiros socorros, gestão de eventos e comunicação comunitária. Inscrições abertas!',
    author: 'REVO Academy',
    date: '2 dias atrás',
    likes: 267,
    comments: 56
  },
  {
    id: 6,
    type: 'event',
    title: 'Maratona Solidária - Últimas Vagas!',
    content: 'Faltam apenas 10 vagas para voluntários na Maratona Solidária 2025! Essa é sua chance de fazer parte de um dos maiores eventos esportivos beneficentes do ano.',
    author: 'Corrida pela Vida',
    date: '3 dias atrás',
    likes: 445,
    comments: 78,
    category: 'Esportes',
    location: 'São Paulo',
    eventDate: '15/12/2025'
  }
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

export const MOCK_OPEN_EVENTS: OpenEvent[] = [
  {
    id: 1,
    title: 'Limpeza da Praia de Copacabana',
    category: 'Meio Ambiente',
    date: '15/11/2025',
    location: 'Rio de Janeiro, RJ',
    volunteers: 45,
    maxVolunteers: 60,
    status: 'Inscrições Abertas'
  },
  {
    id: 2,
    title: 'Doação de Alimentos',
    category: 'Social',
    date: '18/11/2025',
    location: 'São Paulo, SP',
    volunteers: 32,
    maxVolunteers: 50,
    status: 'Inscrições Abertas'
  },
  {
    id: 3,
    title: 'Plantio de Árvores - Serra da Cantareira',
    category: 'Meio Ambiente',
    date: '20/11/2025',
    location: 'São Paulo, SP',
    volunteers: 28,
    maxVolunteers: 40,
    status: 'Inscrições Abertas'
  },
  {
    id: 4,
    title: 'Aulas de Reforço Escolar',
    category: 'Educação',
    date: '22/11/2025',
    location: 'São Paulo, SP',
    volunteers: 15,
    maxVolunteers: 20,
    status: 'Inscrições Abertas'
  },
  {
    id: 5,
    title: 'Festival Cultural Comunitário',
    category: 'Cultura',
    date: '25/11/2025',
    location: 'Belo Horizonte, MG',
    volunteers: 38,
    maxVolunteers: 50,
    status: 'Inscrições Abertas'
  }
];

export const MOCK_CLOSED_EVENTS: ClosedEvent[] = [
  {
    id: 1,
    title: 'Maratona Solidária 2024',
    category: 'Esportes',
    date: '15/08/2024',
    location: 'São Paulo, SP',
    participants: 50,
    attended: 48,
    hoursGenerated: 384,
    certificatesIssued: 48,
    averageScore: 95
  },
  {
    id: 2,
    title: 'Plantio de Árvores - Junho',
    category: 'Meio Ambiente',
    date: '10/06/2024',
    location: 'São Paulo, SP',
    participants: 35,
    attended: 32,
    hoursGenerated: 160,
    certificatesIssued: 32,
    averageScore: 92
  },
  {
    id: 3,
    title: 'Festival Cultural de Verão',
    category: 'Cultura',
    date: '22/01/2024',
    location: 'Rio de Janeiro, RJ',
    participants: 60,
    attended: 58,
    hoursGenerated: 580,
    certificatesIssued: 58,
    averageScore: 98
  },
  {
    id: 4,
    title: 'Campanha de Doação - Inverno',
    category: 'Social',
    date: '15/07/2024',
    location: 'São Paulo, SP',
    participants: 40,
    attended: 38,
    hoursGenerated: 152,
    certificatesIssued: 38,
    averageScore: 88
  },
  {
    id: 5,
    title: 'Oficinas Educacionais',
    category: 'Educação',
    date: '30/05/2024',
    location: 'Belo Horizonte, MG',
    participants: 25,
    attended: 24,
    hoursGenerated: 120,
    certificatesIssued: 24,
    averageScore: 94
  }
];

export const MOCK_RECENT_ORGANIZATION_EVENTS: RecentOrganizationEvent[] = [
  { id: 1, name: 'Limpeza de Praia', volunteers: 45, date: '15/11/2025', status: 'Aberto' },
  { id: 2, name: 'Doação de Alimentos', volunteers: 32, date: '18/11/2025', status: 'Aberto' },
  { id: 3, name: 'Plantio de Árvores', volunteers: 28, date: '20/11/2025', status: 'Aberto' }
];

export const EVENT_CATEGORIES = ['Todas', 'Meio Ambiente', 'Educação', 'Saúde', 'Cultura', 'Esportes', 'Social'];

export const MOCK_EVENT_PARTICIPANTS: EventParticipant[] = [
  {
    id: 1,
    name: 'Maria Silva',
    email: 'maria.silva@email.com',
    role: 'Coordenadora',
    hoursWorked: 8,
    attended: true,
    score: 100,
    issueCertificate: true,
    notes: ''
  },
  {
    id: 2,
    name: 'João Santos',
    email: 'joao.santos@email.com',
    role: 'Voluntário Geral',
    hoursWorked: 8,
    attended: true,
    score: 100,
    issueCertificate: true,
    notes: ''
  },
  {
    id: 3,
    name: 'Ana Costa',
    email: 'ana.costa@email.com',
    role: 'Apoio Logístico',
    hoursWorked: 6,
    attended: true,
    score: 80,
    issueCertificate: true,
    notes: ''
  },
  {
    id: 4,
    name: 'Pedro Oliveira',
    email: 'pedro.oliveira@email.com',
    role: 'Voluntário Geral',
    hoursWorked: 0,
    attended: false,
    score: 0,
    issueCertificate: false,
    notes: 'Não compareceu'
  }
];

export const MOCK_SEARCH_VOLUNTEERS: SearchVolunteer[] = [
  {
    id: 1,
    name: 'Maria Silva',
    email: 'maria.silva@email.com',
    location: 'São Paulo, SP',
    totalEvents: 24,
    hoursVolunteered: 156,
    rating: 5,
    categories: ['Meio Ambiente', 'Social'],
    availability: 'Fins de semana',
    status: 'available'
  },
  {
    id: 2,
    name: 'João Santos',
    email: 'joao.santos@email.com',
    location: 'São Paulo, SP',
    totalEvents: 18,
    hoursVolunteered: 120,
    rating: 5,
    categories: ['Educação', 'Social'],
    availability: 'Flexível',
    status: 'available'
  },
  {
    id: 3,
    name: 'Ana Costa',
    email: 'ana.costa@email.com',
    location: 'Rio de Janeiro, RJ',
    totalEvents: 32,
    hoursVolunteered: 200,
    rating: 4,
    categories: ['Meio Ambiente', 'Cultura'],
    availability: 'Tardes e fins de semana',
    status: 'available'
  },
  {
    id: 4,
    name: 'Pedro Oliveira',
    email: 'pedro.oliveira@email.com',
    location: 'São Paulo, SP',
    totalEvents: 15,
    hoursVolunteered: 95,
    rating: 5,
    categories: ['Esportes', 'Social'],
    availability: 'Fins de semana',
    status: 'invited'
  },
  {
    id: 5,
    name: 'Carla Mendes',
    email: 'carla.mendes@email.com',
    location: 'Belo Horizonte, MG',
    totalEvents: 28,
    hoursVolunteered: 180,
    rating: 5,
    categories: ['Saúde', 'Meio Ambiente'],
    availability: 'Flexível',
    status: 'available'
  }
];


export const MOCK_ORGANIZATION_MONTHLY_DATA: OrganizationMonthlyData[] = [
  { month: 'Jan', events: 3, volunteers: 45, hours: 180 },
  { month: 'Fev', events: 2, volunteers: 30, hours: 120 },
  { month: 'Mar', events: 4, volunteers: 60, hours: 240 },
  { month: 'Abr', events: 3, volunteers: 48, hours: 192 },
  { month: 'Mai', events: 5, volunteers: 75, hours: 300 },
  { month: 'Jun', events: 4, volunteers: 64, hours: 256 },
  { month: 'Jul', events: 6, volunteers: 90, hours: 360 },
  { month: 'Ago', events: 4, volunteers: 64, hours: 256 },
  { month: 'Set', events: 5, volunteers: 80, hours: 320 },
  { month: 'Out', events: 5, volunteers: 85, hours: 340 },
  { month: 'Nov', events: 4, volunteers: 70, hours: 280 },
  { month: 'Dez', events: 0, volunteers: 0, hours: 0 }
];

export const MOCK_ORGANIZATION_CATEGORY_STATS: OrganizationCategoryStats[] = [
  { category: 'Meio Ambiente', events: 12, volunteers: 180, percentage: 27 },
  { category: 'Social', events: 10, volunteers: 150, percentage: 22 },
  { category: 'Educação', events: 8, volunteers: 120, percentage: 18 },
  { category: 'Cultura', events: 7, volunteers: 105, percentage: 16 },
  { category: 'Saúde', events: 5, volunteers: 75, percentage: 11 },
  { category: 'Esportes', events: 3, volunteers: 45, percentage: 6 }
];

export const MOCK_TOP_VOLUNTEERS: TopVolunteer[] = [
  { name: 'Maria Silva', events: 24, hours: 156, rank: 1 },
  { name: 'João Santos', events: 18, hours: 120, rank: 2 },
  { name: 'Ana Costa', events: 32, hours: 200, rank: 3 },
  { name: 'Pedro Oliveira', events: 15, hours: 95, rank: 4 },
  { name: 'Carla Mendes', events: 28, hours: 180, rank: 5 }
];

