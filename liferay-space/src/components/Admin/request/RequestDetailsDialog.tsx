import React from 'react';
import { Request } from '../../../types';
import { format } from 'date-fns';
import { Calendar, Users, MessageSquareText } from 'lucide-react';
import RequestStatusBadge from '../RequestStatusBadge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "../ui/dialog";
import { Button } from '../ui/button';

interface RequestDetailsDialogProps {
  request: Request | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}

const RequestDetailsDialog = ({ 
  request, 
  isOpen, 
  onOpenChange, 
  onApprove, 
  onReject 
}: RequestDetailsDialogProps) => {
  if (!request) return null;
  
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'dd/MM/yyyy');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{request.title}</DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <RequestStatusBadge status={request.status} />
            </div>
            <div className="text-sm text-gray-500">
              Criado em {formatDate(request.createdAt)}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-medium text-gray-700 mb-3 flex items-center">
                <Calendar size={18} className="mr-2 text-blue-600" /> 
                Detalhes do Evento
              </h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Data:</span> {formatDate(request.eventDate)}
                </p>
                <p>
                  <span className="font-medium">Horário:</span> {request.startTime} às {request.endTime}
                </p>
                <p>
                  <span className="font-medium">Espaço:</span> {request.spaceName}
                </p>
                <p className="flex items-center">
                  <Users size={16} className="mr-1 text-gray-500" /> 
                  <span className="font-medium mr-1">Participantes:</span> 
                  {request.attendees}
                </p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-medium text-gray-700 mb-3 flex items-center">
                <MessageSquareText size={18} className="mr-2 text-blue-600" /> 
                Informações de Contato
              </h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Solicitante:</span> {request.requesterName}
                </p>
                <p>
                  <span className="font-medium">Email:</span> {request.requesterEmail}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
            <h3 className="font-medium text-gray-700 mb-3">Descrição do Evento</h3>
            <p className="text-gray-600 text-sm whitespace-pre-wrap">{request.description}</p>
          </div>
        </div>
        
        <DialogFooter>
          {request.status === 'pending' && (
            <div className="flex space-x-2">
              <Button variant="destructive" onClick={() => onReject(request.id)}>
                Rejeitar
              </Button>
              <Button variant="default" onClick={() => onApprove(request.id)}>
                Aprovar
              </Button>
            </div>
          )}
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RequestDetailsDialog;