import React, { useState, useEffect } from 'react';
import { Request } from '../../../types'; // Verifique o caminho

const mockSpaces = [
  { id: 'elem-01', name: 'Sala Elementos', capacity: 25 },
  { id: 'pang-01', name: 'Sala Pangeia', capacity: 10 },
  { id: 'aud-01', name: 'Auditório', capacity: 200 },
  { id: 'var-01', name: 'Varanda', capacity: 50 },
];

interface RequestEditCardProps {
  request: Request | null;
  isOpen: boolean;
  onSave: (editedRequest: Request) => void;
  onClose: () => void;
}

const RequestEditCard = ({ request, isOpen, onSave, onClose }: RequestEditCardProps) => {
  const [formData, setFormData] = useState<Request | null>(null);

  useEffect(() => {
    if (request) {
      setFormData(request);
    }
  }, [request]);

  if (!isOpen || !formData) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => prev ? { ...prev, [name]: value } : null);
  };
  
  const handleSpaceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const spaceId = e.target.value;
    const selectedSpace = mockSpaces.find(s => s.id === spaceId);
    if (selectedSpace) {
      setFormData(prev => prev ? { 
        ...prev, 
        spaceId: selectedSpace.id,
        spaceName: selectedSpace.name,
      } : null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData) {
      onSave(formData);
    }
  };

  const styles = {
    card: {
      backgroundColor: '#ffffff',
      padding: '24px',
      borderRadius: '8px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      marginTop: '24px',
    },
    title: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '24px',
      borderBottom: '1px solid #e2e8f0',
      paddingBottom: '16px',
    },
    formGroup: {
      marginBottom: '16px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#4b5563',
    },
    input: {
      width: '100%',
      padding: '10px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '14px',
      boxSizing: 'border-box',
    },
    row: {
      display: 'flex',
      gap: '16px',
    },
    actions: {
      display: 'flex',
      justifyContent: 'flex-start',
      gap: '12px',
      marginTop: '24px',
      paddingTop: '16px',
      borderTop: '1px solid #e2e8f0',
    },
    saveButton: {
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
    },
    cancelButton: {
      backgroundColor: 'transparent',
      color: '#4b5563',
      padding: '10px 20px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
    }
  } as const;

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Editar Evento</h3>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Título do Evento</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} style={styles.input} />
        </div>
        <div style={styles.row}>
          <div style={{ ...styles.formGroup, flex: 1 }}>
            <label style={styles.label}>Data</label>
            <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} style={styles.input} />
          </div>
          <div style={{ ...styles.formGroup, flex: 2 }}>
            <label style={styles.label}>Espaço</label>
            <select name="spaceId" value={formData.spaceId} onChange={handleSpaceChange} style={styles.input}>
              {mockSpaces.map(space => (
                <option key={space.id} value={space.id}>{space.name} ({space.capacity} pessoas)</option>
              ))}
            </select>
          </div>
        </div>
        <div style={styles.row}>
          <div style={{ ...styles.formGroup, flex: 1 }}>
            <label style={styles.label}>Hora de Início</label>
            <input type="time" name="startTime" value={formData.startTime} onChange={handleChange} style={styles.input} />
          </div>
          <div style={{ ...styles.formGroup, flex: 1 }}>
            <label style={styles.label}>Hora de Término</label>
            <input type="time" name="endTime" value={formData.endTime} onChange={handleChange} style={styles.input} />
          </div>
          <div style={{ ...styles.formGroup, flex: 1 }}>
            <label style={styles.label}>Número de Participantes</label>
            <input type="number" name="attendees" value={formData.attendees} onChange={handleChange} style={styles.input} />
          </div>
        </div>
        <div style={styles.actions}>
            <button type="button" onClick={onClose} style={styles.cancelButton}>Cancelar</button>
            <button type="submit" style={styles.saveButton}>Salvar Alterações</button>
        </div>
      </form>
    </div>
  );
};

export default RequestEditCard;