import React, { useState, useMemo, useEffect } from 'react';
import Layout from '../components/Admin/Layout';
import { EventData, Request } from '../types';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, CalendarCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Admin/ui/card'; 
import { calendarStyles, calendarConfig, getEventStatusStyle } from '../utils/calendarStyles';
import { useReservations } from '../contexts/ReservationsContext'; 

const CalendarPage = () => {
  const { reservations } = useReservations();
  const calendarEvents = useMemo((): EventData[] => {
    console.log("[CalendarPage] Reservations recebidas do contexto:", reservations);
    if (!reservations) return [];

    return reservations
      .filter(request => request.status === 'approved') 
      .map((request: Request): EventData => {
        const startTime = request.startTime && request.startTime !== "N/A" ? request.startTime : "00:00";
        const endTime = request.endTime && request.endTime !== "N/A" ? request.endTime : "23:59";

        return {
          id: `event-${request.id}`, 
          title: request.title,
          start: `${request.eventDate}T${startTime}:00`, 
          end: `${request.eventDate}T${endTime}:00`,     
          spaceId: request.spaceId,
          spaceName: request.spaceName,
          status: request.status, 
          requestId: request.id, 
        };
      });
  }, [reservations]); 

  console.log("[CalendarPage] Eventos transformados para o calendário:", calendarEvents);

  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  const sortedEvents = useMemo(() => {
    return [...calendarEvents].sort((a, b) =>
      new Date(a.start).getTime() - new Date(b.start).getTime()
    );
  }, [calendarEvents]); 

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'approved': return 'Aprovado';
      case 'pending': return 'Pendente'; 
      case 'rejected': return 'Rejeitado'; 
      default: return status;
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
      <div style={calendarStyles.container}>
        <div style={calendarStyles.header}>
          <CalendarIcon size={32} color={calendarConfig.colors.primary} />
          <h2 style={calendarStyles.title}>Calendário de Eventos</h2>
        </div>
        
        <div style={calendarStyles.mainCard}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 3fr) minmax(0, 1fr)', gap: calendarConfig.spacing.large }}>
            <div>
              <div style={{ marginBottom: calendarConfig.spacing.medium, display: 'flex', alignItems: 'center', gap: calendarConfig.spacing.small }}>
                <CalendarIcon size={20} color={calendarConfig.colors.primary} />
                <h3 style={{ fontWeight: '600', fontSize: '18px', margin: 0, color: calendarConfig.colors.textPrimary }}>
                  Eventos Agendados (Aprovados)
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
                        role="button" 
                        tabIndex={0}  
                        onKeyPress={(e) => e.key === 'Enter' && setSelectedEvent(event)}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: calendarConfig.spacing.small }}>
                          <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: calendarConfig.colors.textPrimary }}>{event.title}</h4>
                          <span style={{
                            padding: '4px 8px', borderRadius: '12px', fontSize: '12px',
                            fontWeight: '500', backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            border: `1px solid ${statusStyle.borderLeftColor || calendarConfig.colors.success}` // Fallback para cor da borda
                          }}>
                            {getStatusLabel(event.status)}
                          </span>
                        </div>
                        
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px', gap: calendarConfig.spacing.small, color: calendarConfig.colors.textSecondary }}>
                          <CalendarCheck size={16} />
                          <span>{formatEventDate(event.start)}</span>
                          <span>•</span>
                          <span>{formatEventTime(event.start)} - {formatEventTime(event.end)}</span>
                        </div>
                        
                        <div style={{ fontSize: '14px', marginTop: '4px', fontWeight: '500', color: calendarConfig.colors.textPrimary }}>
                          {event.spaceName}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div style={{ 
                    textAlign: 'center', padding: calendarConfig.spacing.xlarge,
                    color: calendarConfig.colors.textSecondary, fontStyle: 'italic'
                  }}>
                    Não existem eventos aprovados para exibir no calendário.
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
                            padding: '4px 12px', borderRadius: '12px', fontSize: '12px',
                            fontWeight: '500', ...getEventStatusStyle(selectedEvent.status)
                        }}>
                            {getStatusLabel(selectedEvent.status)}
                        </span>
                    </div>
                  </div>
                  <button 
                    style={{ /* ... seu estilo para o botão ... */ }}
                    onClick={() => {
                      console.log(`Navegar para detalhes completos da solicitação ID: ${selectedEvent.requestId}`);
                    }}
                  >
                    Ver Detalhes da Solicitação
                  </button>
                </div>
              ) : (
                <div style={{ color: calendarConfig.colors.textSecondary, fontStyle: 'italic' }}>
                  Selecione um evento para ver os detalhes.
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