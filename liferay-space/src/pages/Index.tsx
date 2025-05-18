import React, { useState } from 'react';
import Layout from '../components/Admin/Layout';
import StatCard from '../components/Admin/dashboard/StatCard';
import SpaceUsageChart from '../components/Admin/dashboard/SpaceUsageChart';
import MonthlyEventsChart from '../components/Admin/dashboard/MonthlyEventsChart';
import { Calendar, Users, Building2, Clock } from 'lucide-react';
import { requests, spaceUsage, monthlyEvents } from '../data/mockData';
import { useToast } from '../hooks/use-toast';
import PendingRequestsTable from '../components/Admin/dashboard/PendingRequestsTable';
import { mockRequests } from '../data/requestData';

const Index = () => {
  const { toast } = useToast();
  const [requestsData] = useState(mockRequests);

  const pendingCount = requestsData.filter(r => r.status === 'pending').length;
  const approvedCount = requestsData.filter(r => r.status === 'approved').length;
  const totalSpaces = spaceUsage.length;
  const todayEvents = requestsData.filter(r => {
    const today = new Date().toISOString().split('T')[0];
    return r.eventDate === today && r.status === 'approved';
  }).length;

  const pendingRequests = requestsData.filter(request => request.status === 'pending');

  return (
    <Layout title="Dashboard">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6">
        <StatCard 
          title="Solicitações Pendentes" 
          value={pendingCount}
          icon={<Clock size={24} />}
          color="cyan"
        />
        <StatCard 
          title="Eventos Aprovados" 
          value={approvedCount}
          icon={<Calendar size={24} />}
          change={{ value: 12, positive: true }}
        />
        <StatCard 
          title="Espaços Disponíveis" 
          value={totalSpaces}
          icon={<Building2 size={24} />}
          color="indigo"
        />
        <StatCard 
          title="Eventos Hoje" 
          value={todayEvents}
          icon={<Users size={24} />}
          color="purple"
        />
      </div>

      {pendingRequests.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Solicitações Pendentes</h2>
          <div className="overflow-x-auto">
            <PendingRequestsTable pendingRequests={pendingRequests} />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SpaceUsageChart data={spaceUsage} />
        <MonthlyEventsChart data={monthlyEvents} />
      </div>
    </Layout>
  );
};

export default Index;
