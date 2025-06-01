import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Request } from '../types';
import { mockRequests } from '../data/requestData'; 

interface ReservationsContextType {
  reservations: Request[];
  addReservation: (newRequestData: Omit<Request, 'id' | 'createdAt' | 'status'>) => void;
  updateRequestStatus: (requestId: string, status: Request['status']) => void;
  updateReservation: (updatedRequest: Request) => void;
  clearAllReservations: () => void;
}

const ReservationsContext = createContext<ReservationsContextType | undefined>(undefined);

export const useReservations = () => {
  const context = useContext(ReservationsContext);
  if (!context) {
    throw new Error('useReservations deve ser usado dentro de um ReservationsProvider');
  }
  return context;
};

const LOCAL_STORAGE_KEY = 'liferaySpaceAdminRequests';

export const ReservationsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  console.log('CONTEXTO: ReservationsProvider está RENDERIZANDO/MONTANDO.');

  const [reservations, setReservations] = useState<Request[]>(() => {
    console.log(`CONTEXTO: Tentando carregar do localStorage com a chave: ${LOCAL_STORAGE_KEY}`);
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log('CONTEXTO: Valor lido do localStorage (stored):', stored);

    if (stored) { // Se existe algo no localStorage
      try {
        const parsedData = JSON.parse(stored);
        if (Array.isArray(parsedData) && parsedData.length > 0) { 
          console.log('CONTEXTO: Dados válidos e COM ITENS carregados do localStorage:', parsedData);
          return parsedData;
        } else if (Array.isArray(parsedData) && parsedData.length === 0) {
          console.log('CONTEXTO: localStorage continha um array vazio. Decidindo carregar mockRequests.');
        } else {
          console.log('CONTEXTO: Dados do localStorage não são um array válido. Usando mockRequests.');
        }
      } catch (error) {
        console.error('CONTEXTO: Erro ao parsear dados do localStorage. Usando mockRequests.', error);

      }
    }

    console.log('CONTEXTO: Condições para carregar do localStorage não satisfeitas ou resultaram em array vazio. Usando mockRequests como estado inicial.');
    return mockRequests;
  });

  useEffect(() => {
    console.log('CONTEXTO: useEffect disparado. Estado reservations ATUAL:', reservations);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(reservations));
      console.log('CONTEXTO: reservations salvas no localStorage.');
    } catch (error) {
      console.error('CONTEXTO: Erro ao salvar reservations no localStorage:', error);
    }
  }, [reservations]);

  const addReservation = (requestDataFromForm: Omit<Request, 'id' | 'createdAt' | 'status'>) => {
    console.log('CONTEXTO: Função addReservation RECEBEU:', requestDataFromForm);
    const newFullRequest: Request = {
      ...requestDataFromForm,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString().split('T')[0],
      status: 'pending',
    };
    console.log('CONTEXTO: Novo request COMPLETO a ser adicionado:', newFullRequest);
    setReservations(prevReservations => {
      console.log('CONTEXTO: Dentro do setReservations (add), prevReservations:', prevReservations);
      const updatedReservations = [...prevReservations, newFullRequest];
      console.log('CONTEXTO: Dentro do setReservations (add), updatedReservations:', updatedReservations);
      return updatedReservations;
    });
  };

  const updateRequestStatus = (requestId: string, status: Request['status']) => {
    console.log(`CONTEXTO: updateRequestStatus chamado para ID: ${requestId}, Novo Status: ${status}`);
    setReservations(prev =>
      prev.map(req => (req.id === requestId ? { ...req, status } : req))
    );
  };

  const updateReservation = (updatedRequest: Request) => {
    console.log(`CONTEXTO: updateReservation chamado para ID: ${updatedRequest.id}`, updatedRequest);
    setReservations(prevReservations =>
      prevReservations.map(req => (req.id === updatedRequest.id ? { ...req, ...updatedRequest } : req))
    );
  };
  
  const clearAllReservations = () => {
    console.log('CONTEXTO: Limpando todas as reservations e o localStorage.');
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setReservations([]);
    setReservations(mockRequests);
  };
  
  const contextValue = { reservations, addReservation, updateRequestStatus, updateReservation, clearAllReservations };

  return (
    <ReservationsContext.Provider value={contextValue}>
      {children}
    </ReservationsContext.Provider>
  );
};