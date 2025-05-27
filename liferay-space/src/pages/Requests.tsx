import React, { useState } from 'react';
import { Request } from '../types'; // Verifique o caminho
import { mockRequests } from '../data/requestData'; // Verifique o caminho
import Layout from '../components/Admin/Layout'; // Verifique o caminho
import RequestTable from '../components/Admin/dashboard/RequestTable'; // Verifique o caminho
import RequestEditCard from '../components/Admin/request/RequestEditCard'; // Verifique o caminho
import { useToast } from "../hooks/use-toast"; // Verifique o caminho

const Requests = () => {
  const [requests, setRequests] = useState<Request[]>(mockRequests);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [currentRequest, setCurrentRequest] = useState<Request | null>(null);
  const { toast } = useToast();

  const handleApprove = (id: string) => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status: 'approved' } : r));
  };

  const handleReject = (id: string) => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status: 'rejected' } : r));
  };

  const handleEdit = (request: Request) => {
    setCurrentRequest(request);
    setIsEditOpen(true);
  };

  const handleCloseEdit = () => {
    setIsEditOpen(false);
    setCurrentRequest(null);
  };

  const handleSaveEdit = (editedRequest: Request) => {
    setRequests(prev =>
      prev.map(request => (request.id === editedRequest.id ? editedRequest : request))
    );
    handleCloseEdit();
    toast({
      title: "Evento atualizado",
      description: "O evento foi atualizado com sucesso.",
    });
  };

  const styles = {
    pageContainer: {
      padding: '24px',
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
    },
    header: {
      marginBottom: '24px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1f2937',
    },
    subtitle: {
      marginTop: '4px',
      color: '#6b7280',
    }
  };

  return (
    <Layout title="Solicitações">
      <div style={styles.pageContainer}>
        <div style={styles.header}>
          <h1 style={styles.title}>Gerenciamento de Solicitações</h1>
          <p style={styles.subtitle}>Gerencie todas as solicitações de eventos da organização.</p>
        </div>

        <RequestTable
          requests={requests}
          onApprove={handleApprove}
          onReject={handleReject}
          onEdit={handleEdit}
          onDetails={(request) => console.log('Detalhes:', request)} // Exemplo para detalhes
        />

        {/* O card de edição só aparece quando isEditOpen é true */}
        {isEditOpen && (
          <RequestEditCard
            isOpen={isEditOpen}
            request={currentRequest}
            onSave={handleSaveEdit}
            onClose={handleCloseEdit}
          />
        )}
      </div>
    </Layout>
  );
};

export default Requests;