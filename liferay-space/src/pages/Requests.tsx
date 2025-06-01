import React, { useState } from 'react'; 
import { useReservations } from '../contexts/ReservationsContext'; 
import { Request } from '../types'; 
import Layout from '../components/Admin/Layout';
import RequestTable from '../components/Admin/dashboard/RequestTable'; 
import { useToast } from "@/hooks/use-toast"; 

const RequestsPage = () => { 
  const { reservations, updateRequestStatus } = useReservations();
  const { toast } = useToast();
  const requestsToShowInTable = reservations; 
  const handleApprove = (id: string) => {
    updateRequestStatus(id, 'approved'); 
    toast({ title: "Solicitação Aprovada", description: "O status foi atualizado." });
  };

  const handleReject = (id: string) => {
    updateRequestStatus(id, 'rejected'); 
    toast({ title: "Solicitação Rejeitada", description: "O status foi atualizado." });
  };

  return (
    <Layout title="Solicitações"> 
      <div style={{ padding: '24px', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
        <div style={{ marginBottom: '24px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937' }}>Gerenciamento de Solicitações</h1>
          <p style={{ marginTop: '4px', color: '#6b7280' }}>Gerencie todas as solicitações de eventos.</p>
        </div>

        <RequestTable
          requests={requestsToShowInTable} 
          onApprove={handleApprove}
          onReject={handleReject}
          onEdit={(request) => { 
            console.log("Editar request:", request); 
          }}
          onDetails={(request) => { 
            console.log("Detalhes do request:", request);
          }}
        />
      </div>
    </Layout>
  );
};

export default RequestsPage;