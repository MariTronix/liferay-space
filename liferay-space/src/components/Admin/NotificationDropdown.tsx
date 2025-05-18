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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white">
          <Bell size={20} />
          {hasUnreadNotifications && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Notificações</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {recentRequests.length > 0 ? (
          <>
            {recentRequests.map((request) => (
              <DropdownMenuItem key={request.id} className="cursor-pointer">
                <Link 
                  to={`/requests?id=${request.id}`}
                  className="w-full"
                  onClick={() => handleNotificationClick(request)}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{request.title}</span>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{request.requesterName}</span>
                      <span>{formatDate(request.eventDate)}</span>
                    </div>
                  </div>
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/requests" className="w-full text-center text-primary-600 font-medium">
                Ver todas as solicitações
              </Link>
            </DropdownMenuItem>
          </>
        ) : (
          <div className="py-3 px-2 text-center text-gray-500">
            Não há novas notificações
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropdown;
