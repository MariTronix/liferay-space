import { subDays, addDays, format } from 'date-fns'; // Importação para manipula data.

// Define types Status do evento e nome do espaço.
export type EventStatus = 'pending' | 'approved' | 'rejected';
export type SpaceType = 'Auditório' | 'Varanda' | 'Sala de Jogos' | 'Pangeia' | 'Elementos' | 'Beleza' | 'Amor' | 'Vaidade' | 'Essência';

//Estrutura para solicitação do evento com os campos necessários
export interface EventRequest {
  id: string;
  title: string;
  organizer: string;
  organizerEmail: string;
  space: SpaceType;
  date: string;
  startTime: string;
  endTime: string;
  attendees: number;
  description: string;
  status: EventStatus;
  createdAt: string;
}

//Relatorio de ocupação de espaço
export interface SpaceOccupancy {
  space: SpaceType; // nome
  occupancyRate: number; // porcentagem de ocupação
  totalEvents: number; // quantos eventos no mês
}


// Generate mock data

//Data atual
const today = new Date();


// Eventos gerados(simulando banco de dados)
export const mockRequests: EventRequest[] = [
  {
    id: '1001',
    title: 'Workshop de React Native',
    organizer: 'GDG Recife',
    organizerEmail: 'contato@gdgrecife.com',
    space: 'Auditório',
    date: format(today, 'yyyy-MM-dd'),
    startTime: '14:00',
    endTime: '17:00',
    attendees: 50,
    description: 'Workshop introdutório sobre React Native para desenvolvedores mobile.',
    status: 'pending',
    createdAt: format(subDays(today, 2), 'yyyy-MM-dd HH:mm'),
  },
  {
    id: '1002',
    title: 'Palestra sobre Inteligência Artificial',
    organizer: 'UFPE',
    organizerEmail: 'eventos@ufpe.br',
    space: 'Varanda',
    date: format(addDays(today, 3), 'yyyy-MM-dd'),
    startTime: '10:00',
    endTime: '12:00',
    attendees: 30,
    description: 'Palestra sobre avanços recentes em IA e suas aplicações práticas.',
    status: 'approved',
    createdAt: format(subDays(today, 5), 'yyyy-MM-dd HH:mm'),
  },
  {
    id: '1003',
    title: 'Reunião de Planejamento Estratégico',
    organizer: 'EcoSpace Administração',
    organizerEmail: 'admin@ecospace.com',
    space: 'Sala de Jogos',
    date: format(addDays(today, 1), 'yyyy-MM-dd'),
    startTime: '09:00',
    endTime: '11:30',
    attendees: 10,
    description: 'Reunião interna para planejamento do próximo trimestre.',
    status: 'approved',
    createdAt: format(subDays(today, 7), 'yyyy-MM-dd HH:mm'),
  },
  {
    id: '1004',
    title: 'Meetup de Python',
    organizer: 'PyLadies Recife',
    organizerEmail: 'pyladies@recife.org',
    space: 'Pangeia',
    date: format(addDays(today, 5), 'yyyy-MM-dd'),
    startTime: '18:30',
    endTime: '21:00',
    attendees: 25,
    description: 'Encontro mensal da comunidade PyLadies com foco em Data Science.',
    status: 'pending',
    createdAt: format(subDays(today, 1), 'yyyy-MM-dd HH:mm'),
  },
  {
    id: '1005',
    title: 'Hackathon de Sustentabilidade',
    organizer: 'Porto Digital',
    organizerEmail: 'eventos@portodigital.org',
    space: 'Auditório',
    date: format(addDays(today, 7), 'yyyy-MM-dd'),
    startTime: '09:00',
    endTime: '21:00',
    attendees: 80,
    description: 'Hackathon de 12 horas focado em soluções sustentáveis para cidades inteligentes.',
    status: 'rejected',
    createdAt: format(subDays(today, 10), 'yyyy-MM-dd HH:mm'),
  },
  {
    id: '1006',
    title: 'Sessão de Coworking Startups',
    organizer: 'Associação de Startups',
    organizerEmail: 'contato@startups.org',
    space: 'Amor',
    date: format(addDays(today, 2), 'yyyy-MM-dd'),
    startTime: '08:00',
    endTime: '18:00',
    attendees: 15,
    description: 'Dia de trabalho colaborativo para startups locais.',
    status: 'approved',
    createdAt: format(subDays(today, 3), 'yyyy-MM-dd HH:mm'),
  }
];

//Estatistica de ocupação de espaços
export const mockSpaceOccupancy: SpaceOccupancy[] = [
  { space: 'Auditório', occupancyRate: 70, totalEvents: 12 },
  { space: 'Varanda', occupancyRate: 45, totalEvents: 9 },
  { space: 'Sala de Jogos', occupancyRate: 60, totalEvents: 11 },
  { space: 'Pangeia', occupancyRate: 85, totalEvents: 22 },
  { space: 'Essência', occupancyRate: 35, totalEvents: 8 }
];