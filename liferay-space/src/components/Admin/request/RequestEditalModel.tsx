import React from 'react';
import { Request, SpaceType } from '../../../types';

interface RequestEditModalProps {
  request: Request | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (request: Request) => void;
}

const RequestEditModal = ({ request, isOpen, onClose, onSave }: RequestEditModalProps) => {
  const [editedRequest, setEditedRequest] = React.useState<Request | null>(null);

  React.useEffect(() => {
    if (request) {
      setEditedRequest({ ...request });
    }
  }, [request]);

  if (!isOpen || !editedRequest) return null;

  const handleChange = (field: keyof Request, value: string | number) => {
    setEditedRequest(prev => prev ? { ...prev, [field]: value } : null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h3 className="text-lg font-semibold mb-4">Editar Evento</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Título do Evento
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={editedRequest.title}
              onChange={(e) => handleChange('title', e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data
              </label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={editedRequest.eventDate}
                onChange={(e) => handleChange('eventDate', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Espaço
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={editedRequest.spaceName}
                onChange={(e) => {
                  const spaceName = e.target.value as SpaceType;
                  handleChange('spaceName', spaceName);
                }}
              >
                <option value="Pangeia">Sala Pangeia (10 pessoas)</option>
                <option value="Elementos">Sala Elementos (25 pessoas)</option>
                <option value="Beleza">Sala Beleza (5 pessoas)</option>
                <option value="Amor">Sala Amor (5 pessoas)</option>
                <option value="Vaidade">Sala Vaidade (5 pessoas)</option>
                <option value="Essência">Sala Essência (5 pessoas)</option>
                <option value="Auditório">Auditório (180 pessoas)</option>
                <option value="Varanda">Varanda (400 pessoas)</option>
                <option value="Sala de jogos">Sala de jogos (45 pessoas)</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hora de Início
              </label>
              <input
                type="time"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={editedRequest.startTime}
                onChange={(e) => handleChange('startTime', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hora de Término
              </label>
              <input
                type="time"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={editedRequest.endTime}
                onChange={(e) => handleChange('endTime', e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Número de Participantes
            </label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={editedRequest.attendees}
              onChange={(e) => handleChange('attendees', parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className="flex justify-end space-x-3 mt-6">
          <button
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => onSave(editedRequest)}
          >
            Salvar Alterações
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestEditModal;