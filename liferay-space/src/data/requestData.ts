import { Request } from '../types';

export const mockRequests: Request[] = [
  {
    id: '1',
    title: 'Workshop de Inovação',
    requesterName: 'Maria Silva',
    requesterEmail: 'maria@email.com',
    spaceId: 'elem-01',
    spaceName: 'Elementos',
    attendees: 20,
    eventDate: '2025-06-15',
    startTime: '14:00',
    endTime: '16:00',
    status: 'pending',
    description: 'Workshop sobre tecnologias inovadoras. Vamos discutir as últimas tendências em IA e como elas podem ser aplicadas nos negócios. O workshop inclui demonstrações práticas e sessões de networking.',
    createdAt: '2025-06-01'
  },
  {
    id: '2',
    title: 'Reunião Executiva',
    requesterName: 'João Santos',
    requesterEmail: 'joao@email.com',
    spaceId: 'pang-01',
    spaceName: 'Pangeia',
    attendees: 8,
    eventDate: '2025-05-31',
    startTime: '10:00',
    endTime: '11:30',
    status: 'approved',
    description: 'Reunião de avaliação trimestral com os diretores e gerentes para discutir os resultados financeiros e planejar o próximo trimestre. Apresentação de dados e discussão estratégica.',
    createdAt: '2025-05-02'
  },
  {
    id: '3',
    title: 'Treinamento de Equipe',
    requesterName: 'Ana Oliveira',
    requesterEmail: 'ana@email.com',
    spaceId: 'aud-01',
    spaceName: 'Auditório',
    attendees: 150,
    eventDate: '2025-06-20',
    startTime: '09:00',
    endTime: '17:00',
    status: 'rejected',
    description: 'Treinamento abrangente sobre novas metodologias de trabalho, incluindo gestão ágil e design thinking. Sessões práticas e teóricas com especialistas convidados.',
    createdAt: '2025-05-03'
  },
  {
    id: '4',
    title: 'Evento de Networking',
    requesterName: 'Pedro Costa',
    requesterEmail: 'pedro@email.com',
    spaceId: 'var-01',
    spaceName: 'Varanda',
    attendees: 350,
    eventDate: '2025-06-05',
    startTime: '18:00',
    endTime: '22:00',
    status: 'pending',
    description: 'Evento de networking com empresários locais, incluindo coquetel, apresentações curtas e oportunidades para conexões profissionais. Ideal para expandir sua rede de contatos.',
    createdAt: '2025-05-04'
  },
];

export const spaces: Space[] = [
  { id: "1", name: "Pangeia", capacity: 10, category: "sala" },
  { id: "2", name: "Elementos", capacity: 25, category: "sala" },
  { id: "3", name: "Beleza", capacity: 5, category: "sala" },
  { id: "4", name: "Amor", capacity: 5, category: "sala" },
  { id: "5", name: "Vaidade", capacity: 5, category: "sala" },
  { id: "6", name: "Essência", capacity: 5, category: "sala" },
  { id: "7", name: "Auditório", capacity: 180, category: "auditorio" },
  { id: "8", name: "Varanda", capacity: 400, category: "varanda" },
  { id: "9", name: "Sala de jogos", capacity: 45, category: "sala_jogos" }
];