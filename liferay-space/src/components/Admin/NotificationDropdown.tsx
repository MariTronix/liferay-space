import React from 'react';
import { Request } from '../../types';
import { format } from 'date-fns';
import { Bell } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useToast } from '../../hooks/use-toast';
import { Link } from 'react-router-dom';

interface NotificationDropdownProps {
  requests: Request[];
}

const NotificationDropdown = ({ requests }: NotificationDropdownProps) => {
  const { toast } = useToast();
  const recentRequests = requests
    .filter(req => req.status === 'pending')
    .slice(0, 5);
  
  const hasUnreadNotifications = recentRequests.length > 0;
  
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'dd/MM HH:mm');
  };
  
  const handleNotificationClick = (request: Request) => {
    toast({
      title: "Solicitação selecionada",
      description: `Você selecionou: ${request.title}`,
    });
  };

  // Estilos para o card de notificação
  const notificationCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fundo transparente
    backdropFilter: 'blur(10px)',
    borderRadius: '8px',
    border: '1px solid rgba(229, 231, 235, 0.5)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '320px',
    padding: '0',
    overflow: 'hidden'
  };

  // Estilos para cada item de notificação
  const notificationItemStyle = {
    padding: '12px 16px',
    borderBottom: '1px solid rgba(229, 231, 235, 0.5)',
    transition: 'background-color 0.2s',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'rgba(243, 244, 246, 0.7)'
    }
  };

  // Estilos para o botão de notificação
  const notificationButtonStyle = {
    position: 'relative',
    padding: '8px',
    backgroundColor: '#1e40af',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#1e3a8a'
    }
  };

  // Estilos para o indicador de notificação não lida
  const unreadIndicatorStyle = {
    position: 'absolute',
    top: '4px',
    right: '4px',
    width: '8px',
    height: '8px',
    backgroundColor: '#ef4444',
    borderRadius: '50%'
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button style={notificationButtonStyle}>
          <Bell size={20} />
          {hasUnreadNotifications && (
            <span style={unreadIndicatorStyle}></span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        style={notificationCardStyle}
        className="dropdown-content"
      >
        <div style={{
          padding: '12px 16px',
          borderBottom: '1px solid rgba(229, 231, 235, 0.5)',
          fontWeight: '600',
          fontSize: '14px',
          color: '#1f2937'
        }}>
          Notificações
        </div>
        
        {recentRequests.length > 0 ? (
          <>
            {recentRequests.map((request) => (
              <div 
                key={request.id} 
                style={notificationItemStyle}
                onClick={() => handleNotificationClick(request)}
              >
                <Link 
                  to={`/requests?id=${request.id}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                    width: '100%'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ 
                      fontWeight: '500',
                      marginBottom: '4px',
                      color: '#1f2937'
                    }}>
                      {request.title}
                    </span>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      fontSize: '12px',
                      color: '#6b7280'
                    }}>
                      <span>{request.requesterName}</span>
                      <span>{formatDate(request.eventDate)}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            
            <div style={{ 
              padding: '8px 16px',
              borderTop: '1px solid rgba(229, 231, 235, 0.5)',
              textAlign: 'center'
            }}>
              <Link 
                to="/requests" 
                style={{
                  color: '#1e40af',
                  fontWeight: '500',
                  fontSize: '14px',
                  textDecoration: 'none',
                  ':hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                Ver todas as solicitações
              </Link>
            </div>
          </>
        ) : (
          <div style={{ 
            padding: '16px',
            textAlign: 'center',
            color: '#6b7280',
            fontSize: '14px'
          }}>
            Não há novas notificações
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropdown;