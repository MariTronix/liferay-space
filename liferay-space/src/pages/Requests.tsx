import React, { useState } from 'react';
import Layout from '../components/Admin/Layout';
import RequestTable from '../components/Admin/dashboard/RequestTable';
import { useToast } from "../hooks/use-toast";
import { Request } from '../types';
import { mockRequests } from '../data/requestData';
import RequestDetailsDialog from '../components/Admin/request/RequestDetailsDialog';
import RequestEditModal from '../components/Admin/request/RequestEditalModel';

const Requests = () => {
  const [requests, setRequests] = useState<Request[]>(mockRequests);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [currentRequest, setCurrentRequest] = useState<Request | null>(null);
  const { toast } = useToast();

  const handleApprove = (id: string) => {
    setRequests(prev =>
      prev.map(request =>
        request.id === id ? { ...request, status: 'approved' } : request
      )
    );
    toast({
      title: "Solicitação aprovada",
      description: "A solicitação foi aprovada com sucesso.",
    });
    setIsDetailsModalOpen(false);
  };

  const handleReject = (id: string) => {
    setRequests(prev =>
      prev.map(request =>
        request.id === id ? { ...request, status: 'rejected' } : request
      )
    );
    toast({
      title: "Solicitação rejeitada",
      description: "A solicitação foi rejeitada com sucesso.",
    });
    setIsDetailsModalOpen(false);
  };

  const handleEdit = (request: Request) => {
    setCurrentRequest(request);
    setIsEditModalOpen(true);
  };

  const handleDetails = (request: Request) => {
    setCurrentRequest(request);
    setIsDetailsModalOpen(true);
  };

  const handleSaveEdit = (editedRequest: Request) => {
    setRequests(prev =>
      prev.map(request =>
        request.id === editedRequest.id ? editedRequest : request
      )
    );
    setIsEditModalOpen(false);
    setCurrentRequest(null);
    toast({
      title: "Evento atualizado",
      description: "O evento foi atualizado com sucesso.",
    });
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setCurrentRequest(null);
  };

  const handleDetailsOpenChange = (open: boolean) => {
    setIsDetailsModalOpen(open);
    if (!open) {
      setCurrentRequest(null);
    }
  };

  return (
    <Layout title="Solicitações">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Gerenciamento de Solicitações</h2>
        <RequestTable 
          requests={requests} 
          onApprove={handleApprove} 
          onReject={handleReject} 
          onEdit={handleEdit}
          onDetails={handleDetails}
        />
        
        <RequestEditModal
          request={currentRequest}
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          onSave={handleSaveEdit}
        />

        <RequestDetailsDialog
          request={currentRequest}
          isOpen={isDetailsModalOpen}
          onOpenChange={handleDetailsOpenChange}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      </div>
    </Layout>
  );
};

export default Requests;