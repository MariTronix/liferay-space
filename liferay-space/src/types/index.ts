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
  eventDate: string; 
  startTime: string;
  endTime: string;
  attendees: number;
  status: RequestStatus;
  description: string;
  createdAt: string;
}

export interface EventData {
  id: string;
  title: string;
  start: string;
  end: string;
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
