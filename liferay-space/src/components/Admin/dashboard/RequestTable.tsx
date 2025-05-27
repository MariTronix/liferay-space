import React, { useState } from 'react';
import { Request } from '../../../types'; // Verifique o caminho
import RequestStatusBadge from '../RequestStatusBadge'; // Verifique o caminho

interface RequestTableProps {
  requests: Request[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  onEdit: (request: Request) => void;
  onDetails: (request: Request) => void;
}

const RequestTable = ({ requests, onApprove, onReject, onEdit, onDetails }: RequestTableProps) => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

  const filteredRequests = requests.filter(request => {
    if (filter === 'all') return true;
    return request.status === filter;
  });

  const styles = {
    container: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      overflow: 'hidden',
    },
    header: {
      padding: '16px',
      borderBottom: '1px solid #e5e7eb',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    title: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1f2937',
    },
    tabsContainer: {
      display: 'flex',
      gap: '8px',
    },
    tabButton: {
      padding: '8px 12px',
      fontSize: '14px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      backgroundColor: '#f9fafb',
      cursor: 'pointer',
    },
    activeTab: {
      backgroundColor: '#3b82f6',
      color: 'white',
      borderColor: '#3b82f6',
    },
    tableWrapper: {
      overflowX: 'auto',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      padding: '12px 16px',
      textAlign: 'left',
      fontSize: '12px',
      fontWeight: '600',
      color: '#6b7280',
      textTransform: 'uppercase',
      backgroundColor: '#f9fafb',
      borderBottom: '1px solid #e5e7eb',
    },
    td: {
      padding: '16px',
      fontSize: '14px',
      color: '#1f2937',
      borderBottom: '1px solid #e5e7eb',
      whiteSpace: 'nowrap',
    },
    requesterSubtext: {
      fontSize: '12px',
      color: '#6b7280',
    },
    actionsCell: {
      display: 'flex',
      gap: '8px',
    },
    actionButton: {
      padding: '6px 12px',
      fontSize: '12px',
      fontWeight: '500',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      color: 'white',
    },
    approveBtn: { backgroundColor: '#10b981' },
    rejectBtn: { backgroundColor: '#ef4444' },
    editBtn: { backgroundColor: '#3b82f6' },
    detailsBtn: { backgroundColor: '#e5e7eb', color: '#374151' },
  } as const;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Solicitações</h2>
        <div style={styles.tabsContainer}>
          <button onClick={() => setFilter('all')} style={{...styles.tabButton, ...(filter === 'all' && styles.activeTab)}}>Todas</button>
          <button onClick={() => setFilter('pending')} style={{...styles.tabButton, ...(filter === 'pending' && styles.activeTab)}}>Pendentes</button>
          <button onClick={() => setFilter('approved')} style={{...styles.tabButton, ...(filter === 'approved' && styles.activeTab)}}>Aprovadas</button>
          <button onClick={() => setFilter('rejected')} style={{...styles.tabButton, ...(filter === 'rejected' && styles.activeTab)}}>Rejeitadas</button>
        </div>
      </div>
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Evento</th>
              <th style={styles.th}>Solicitante</th>
              <th style={styles.th}>Espaço</th>
              <th style={styles.th}>Data</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((request) => (
              <tr key={request.id}>
                <td style={styles.td}>{request.title}</td>
                <td style={styles.td}>
                  <div>{request.requesterName}</div>
                  <div style={styles.requesterSubtext}>{request.requesterEmail}</div>
                </td>
                <td style={styles.td}>
                  <div>{request.spaceName}</div>
                  <div style={styles.requesterSubtext}>{request.attendees} pessoas</div>
                </td>
                <td style={styles.td}>
                  <div>{new Date(request.eventDate).toLocaleDateString('pt-BR')}</div>
                  <div style={styles.requesterSubtext}>{request.startTime} - {request.endTime}</div>
                </td>
                <td style={styles.td}><RequestStatusBadge status={request.status} /></td>
                <td style={styles.td}>
                  <div style={styles.actionsCell}>
                    {request.status === 'pending' && (
                      <>
                        <button onClick={() => onApprove(request.id)} style={{...styles.actionButton, ...styles.approveBtn}}>Aprovar</button>
                        <button onClick={() => onReject(request.id)} style={{...styles.actionButton, ...styles.rejectBtn}}>Rejeitar</button>
                      </>
                    )}
                    <button onClick={() => onEdit(request)} style={{...styles.actionButton, ...styles.editBtn}}>Editar</button>
                    <button onClick={() => onDetails(request)} style={{...styles.actionButton, ...styles.detailsBtn}}>Detalhes</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestTable;