import { Request, Space, EventData, SpaceUsageData, MonthlyEventsData } from "../types";

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

// Generate dates for the current month
const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

// Helper function to get random date in current month
const getRandomDate = () => {
  const day = Math.floor(Math.random() * 28) + 1;
  return new Date(currentYear, currentMonth, day);
};

// Helper function to format date to ISO string
const formatDate = (date: Date) => {
  return date.toISOString().split('T')[0];
};

// Generate random time
const getRandomTime = (isStart = true) => {
  const hours = isStart 
    ? Math.floor(Math.random() * 12) + 8 // 8 AM to 8 PM
    : Math.floor(Math.random() * 12) + 9; // 9 AM to 9 PM
  return `${hours.toString().padStart(2, '0')}:00`;
};

// Generate requests
export const requests: Request[] = Array.from({ length: 30 }, (_, i) => {
  const eventDate = getRandomDate();
  const startTime = getRandomTime(true);
  const endTime = getRandomTime(false);
  const spaceIndex = Math.floor(Math.random() * spaces.length);
  const space = spaces[spaceIndex];
  const status = ["pending", "approved", "rejected"][Math.floor(Math.random() * 3)] as "pending" | "approved" | "rejected";
  
  return {
    id: `req-${i + 1}`,
    title: `Evento ${i + 1}`,
    requesterName: `Solicitante ${i + 1}`,
    requesterEmail: `email${i + 1}@example.com`,
    spaceId: space.id,
    spaceName: space.name,
    eventDate: formatDate(eventDate),
    startTime,
    endTime,
    attendees: Math.floor(Math.random() * space.capacity) + 1,
    status,
    description: `Descrição do evento ${i + 1}. Este é um texto de exemplo para simular a descrição de um evento.`,
    createdAt: new Date(eventDate.getTime() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString()
  };
});

// Generate events data
export const events: EventData[] = requests
  .filter(req => req.status === "approved")
  .map(req => {
    const [year, month, day] = req.eventDate.split('-');
    const startDateTime = `${req.eventDate}T${req.startTime}:00`;
    const endDateTime = `${req.eventDate}T${req.endTime}:00`;
    
    return {
      id: `event-${req.id}`,
      title: req.title,
      start: startDateTime,
      end: endDateTime,
      spaceId: req.spaceId,
      spaceName: req.spaceName,
      status: req.status,
      requestId: req.id
    };
  });

// Generate space usage data
export const spaceUsage: SpaceUsageData[] = spaces.map(space => {
  const eventsInSpace = events.filter(event => event.spaceId === space.id);
  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysUsed = new Set(eventsInSpace.map(event => event.start.split('T')[0])).size;
  const percentage = Math.round((daysUsed / totalDays) * 100);
  
  return {
    name: space.name,
    usagePercentage: percentage
  };
});

// Generate monthly events data
export const monthlyEvents: MonthlyEventsData[] = (() => {
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  return months.map((month, index) => {
    // If it's a future month, generate random data
    // Otherwise, use past data based on the requests
    const count = index <= currentMonth
      ? requests
          .filter(req => {
            const reqMonth = new Date(req.eventDate).getMonth();
            return reqMonth === index && req.status === 'approved';
          }).length
      : Math.floor(Math.random() * 10);
    
    return {
      month,
      count
    };
  });
})();
