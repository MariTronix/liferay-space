import React, { useState, useMemo } from 'react';
import Layout from '../components/Admin/Layout';
import { EventData } from '../types';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, CalendarCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Admin/ui/card';
import { calendarStyles, calendarConfig, getEventStatusStyle } from '../utils/calendarStyles';

// Mock data for calendar events
const mockEvents: EventData[] = [
  {
    id: '1',
    title: 'Workshop de Inovação',
    start: '2025-06-15T14:00:00',
    end: '2025-06-15T16:00:00',
    spaceId: 'ele-01',
    spaceName: 'Elementos',
    status: 'pending',
    requestId: '1',
  },
  {
    id: '2',
    title: 'Reunião Executiva',
    start: '2025-05-31T10:00:00',
    end: '2025-05-31T11:30:00',
    spaceId: 'pan-01',
    spaceName: 'Pangeia',
    status: 'approved',
    requestId: '2',
  },
  {
    id: '3',
    title: 'Treinamento de Equipe',
    start: '2025-06-20T09:00:00',
    end: '2025-06-20T17:00:00',
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

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'approved': return 'Aprovado';
      case 'pending': return 'Pendente';
      case 'rejected': return 'Rejeitado';
      default: return status;
    }
  };

  return (
    <Layout title="Calendário de Eventos">
      <div style={calendarStyles.container}>
        <div style={calendarStyles.header}>
          <CalendarIcon size={32} color={calendarConfig.colors.primary} />
          <h2 style={calendarStyles.title}>Calendário de Eventos</h2>
        </div>
        
        <div style={calendarStyles.mainCard}>
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: calendarConfig.spacing.large }}>
            <div>
              <div style={{ marginBottom: calendarConfig.spacing.medium, display: 'flex', alignItems: 'center', gap: calendarConfig.spacing.small }}>
                <CalendarIcon size={20} color={calendarConfig.colors.primary} />
                <h3 style={{ fontWeight: '600', fontSize: '18px', margin: 0, color: calendarConfig.colors.textPrimary }}>
                  Eventos por Data
                </h3>
              </div>
              
              <div>
                {sortedEvents.length > 0 ? (
                  sortedEvents.map((event) => {
                    const statusStyle = getEventStatusStyle(event.status);
                    const isSelected = selectedEvent?.id === event.id;
                    
                    return (
                      <div 
                        key={event.id}
                        style={{
                          ...calendarStyles.eventCard,
                          ...statusStyle,
                          ...(isSelected && { 
                            boxShadow: `0 0 0 2px ${calendarConfig.colors.primary}`,
                            transform: 'translateY(-1px)'
                          })
                        }}
                        onClick={() => setSelectedEvent(event)}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: calendarConfig.spacing.small }}>
                          <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>{event.title}</h4>
                          <span style={{
                            padding: '4px 8px',
                            borderRadius: '12px',
                            fontSize: '12px',
                            fontWeight: '500',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            border: `1px solid ${statusStyle.borderLeftColor}`
                          }}>
                            {getStatusLabel(event.status)}
                          </span>
                        </div>
                        
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px', gap: calendarConfig.spacing.small }}>
                          <CalendarCheck size={16} />
                          <span>{formatEventDate(event.start)}</span>
                          <span>•</span>
                          <span>{formatEventTime(event.start)} - {formatEventTime(event.end)}</span>
                        </div>
                        
                        <div style={{ fontSize: '14px', marginTop: '4px', fontWeight: '500' }}>
                          {event.spaceName}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div style={{ 
                    textAlign: 'center', 
                    padding: calendarConfig.spacing.xlarge,
                    color: calendarConfig.colors.textSecondary,
                    fontStyle: 'italic'
                  }}>
                    Não existem eventos cadastrados
                  </div>
                )}
              </div>
            </div>
            
            <div style={calendarStyles.detailsPanel}>
              <h3 style={{ fontWeight: '600', fontSize: '18px', marginBottom: calendarConfig.spacing.medium, color: calendarConfig.colors.textPrimary }}>
                Detalhes do Evento
              </h3>
              
              {selectedEvent ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: calendarConfig.spacing.medium }}>
                  <div>
                    <span style={{ fontSize: '14px', color: calendarConfig.colors.textSecondary }}>Título:</span>
                    <h4 style={{ fontWeight: '600', margin: '4px 0 0 0', color: calendarConfig.colors.textPrimary }}>
                      {selectedEvent.title}
                    </h4>
                  </div>
                  
                  <div>
                    <span style={{ fontSize: '14px', color: calendarConfig.colors.textSecondary }}>Local:</span>
                    <p style={{ margin: '4px 0 0 0', color: calendarConfig.colors.textPrimary }}>{selectedEvent.spaceName}</p>
                  </div>
                  
                  <div>
                    <span style={{ fontSize: '14px', color: calendarConfig.colors.textSecondary }}>Data:</span>
                    <p style={{ margin: '4px 0 0 0', color: calendarConfig.colors.textPrimary }}>{formatEventDate(selectedEvent.start)}</p>
                  </div>
                  
                  <div>
                    <span style={{ fontSize: '14px', color: calendarConfig.colors.textSecondary }}>Horário:</span>
                    <p style={{ margin: '4px 0 0 0', color: calendarConfig.colors.textPrimary }}>
                      {formatEventTime(selectedEvent.start)} - {formatEventTime(selectedEvent.end)}
                    </p>
                  </div>
                  
                  <div>
                    <span style={{ fontSize: '14px', color: calendarConfig.colors.textSecondary }}>Status:</span>
                    <div style={{ marginTop: '4px' }}>
                      <span style={{
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '500',
                        ...getEventStatusStyle(selectedEvent.status)
                      }}>
                        {getStatusLabel(selectedEvent.status)}
                      </span>
                    </div>
                  </div>
                  
                  <button 
                    style={{
                      marginTop: calendarConfig.spacing.medium,
                      padding: `${calendarConfig.spacing.small} ${calendarConfig.spacing.medium}`,
                      backgroundColor: calendarConfig.colors.primary,
                      color: 'white',
                      borderRadius: '6px',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: '500',
                      transition: 'background-color 0.2s'
                    }}
                    onClick={() => {
                      console.log(`Navigate to request ${selectedEvent.requestId}`);
                    }}
                  >
                    Ver Detalhes da Solicitação
                  </button>
                </div>
              ) : (
                <div style={{ color: calendarConfig.colors.textSecondary, fontStyle: 'italic' }}>
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