import React, { useState, useMemo } from 'react';
import Layout from '../components/Admin/Layout';
import { EventData } from '../types';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, CalendarCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Admin/ui/card';

// Mock data for calendar events
const mockEvents: EventData[] = [
  {
    id: '1',
    title: 'Workshop de Inovação',
    start: '2025-05-15T14:00:00',
    end: '2025-05-15T16:00:00',
    spaceId: 'ele-01',
    spaceName: 'Elementos',
    status: 'pending',
    requestId: '1',
  },
  {
    id: '2',
    title: 'Reunião Executiva',
    start: '2025-05-10T10:00:00',
    end: '2025-05-10T11:30:00',
    spaceId: 'pan-01',
    spaceName: 'Pangeia',
    status: 'approved',
    requestId: '2',
  },
  {
    id: '3',
    title: 'Treinamento de Equipe',
    start: '2025-05-20T09:00:00',
    end: '2025-05-20T17:00:00',
    spaceId: 'aud-01',
    spaceName: 'Auditório',
    status: 'approved',
    requestId: '3',
  },
  {
    id: '4',
    title: 'Evento de Networking',
    start: '2025-06-05T18:00:00',
    end: '2025-06-05T22:00:00',
    spaceId: 'var-01',
    spaceName: 'Varanda',
    status: 'pending',
    requestId: '4',
  },
];

const CalendarPage = () => {
  const [events] = useState<EventData[]>(mockEvents);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  // Sort events by start date
  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => 
      new Date(a.start).getTime() - new Date(b.start).getTime()
    );
  }, [events]);

  // Function to get CSS class based on event status
  const getEventClassByStatus = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const formatEventDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return format(date, 'dd/MM/yyyy');
  };

  const formatEventTime = (isoDate: string) => {
    const date = new Date(isoDate);
    return format(date, 'HH:mm');
  };

  return (
    <Layout title="Calendário de Eventos">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Calendário</h2>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <div className="mb-4 flex items-center">
                <CalendarIcon className="mr-2 text-primary" />
                <h3 className="font-medium text-lg">Eventos por Data</h3>
              </div>
              
              <div className="space-y-4">
                {sortedEvents.length > 0 ? (
                  sortedEvents.map((event) => (
                    <Card 
                      key={event.id}
                      className={`cursor-pointer border-l-4 ${
                        selectedEvent?.id === event.id ? 'ring-2 ring-blue-500' : ''
                      } ${getEventClassByStatus(event.status)}`}
                      onClick={() => setSelectedEvent(event)}
                    >
                      <CardHeader className="py-3 px-4">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-base">{event.title}</CardTitle>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                            getEventClassByStatus(event.status)
                          }`}>
                            {event.status === 'approved' ? 'Aprovado' : event.status === 'pending' ? 'Pendente' : 'Rejeitado'}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="py-2 px-4">
                        <div className="flex items-center text-sm">
                          <CalendarCheck className="mr-1 h-4 w-4" />
                          <span>{formatEventDate(event.start)}</span>
                          <span className="mx-1">•</span>
                          <span>{formatEventTime(event.start)} - {formatEventTime(event.end)}</span>
                        </div>
                        <div className="text-sm mt-1">{event.spaceName}</div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-gray-500 italic text-center py-8">
                    Não existem eventos cadastrados
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-medium text-lg mb-4">Detalhes do Evento</h3>
              {selectedEvent ? (
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-500">Título:</span>
                    <h4 className="font-medium">{selectedEvent.title}</h4>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Local:</span>
                    <p>{selectedEvent.spaceName}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Data:</span>
                    <p>{formatEventDate(selectedEvent.start)}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Horário:</span>
                    <p>{formatEventTime(selectedEvent.start)} - {formatEventTime(selectedEvent.end)}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Status:</span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getEventClassByStatus(selectedEvent.status)}`}>
                      {selectedEvent.status === 'approved' ? 'Aprovado' : selectedEvent.status === 'pending' ? 'Pendente' : 'Rejeitado'}
                    </span>
                  </div>
                  <button 
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
                    onClick={() => {
                      // In a real app, this would navigate to the request details
                      console.log(`Navigate to request ${selectedEvent.requestId}`);
                    }}
                  >
                    Ver Detalhes da Solicitação
                  </button>
                </div>
              ) : (
                <div className="text-gray-500 italic">
                  Selecione um evento para ver os detalhes
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CalendarPage;
