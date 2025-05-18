export type SpaceType = 
  | 'Pangeia' 
  | 'Elementos' 
  | 'Beleza' 
  | 'Amor' 
  | 'Vaidade' 
  | 'Essência' 
  | 'Auditório' 
  | 'Varanda' 
  | 'Sala de jogos';

export type RequestStatus = 'pending' | 'approved' | 'rejected';

export interface Space {
  id: string;
  name: SpaceType;
  capacity: number;
  category: 'sala' | 'auditorio' | 'varanda' | 'sala_jogos';
}

export interface Request {
  id: string;
  title: string;
  requesterName: string;
  requesterEmail: string;
  spaceId: string;
  spaceName: SpaceType;
  eventDate: string; // ISO date string
  startTime: string; // HH:MM format
  endTime: string; // HH:MM format
  attendees: number;
  status: RequestStatus;
  description: string;
  createdAt: string; // ISO date string
}

export interface EventData {
  id: string;
  title: string;
  start: string; // ISO date string with time
  end: string; // ISO date string with time
  spaceId: string;
  spaceName: SpaceType;
  status: RequestStatus;
  requestId: string;
}

export interface SpaceUsageData {
  name: SpaceType;
  usagePercentage: number;
}

export interface MonthlyEventsData {
  month: string;
  count: number;
}
