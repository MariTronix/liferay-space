import React, { useState } from 'react';
import Layout from '../components/Admin/Layout';
import StatCard from '../components/Admin/dashboard/StatCard';
import SpaceUsageChart from '../components/Admin/dashboard/SpaceUsageChart';
import MonthlyEventsChart from '../components/Admin/dashboard/MonthlyEventsChart';
import { Calendar, Users, Building2, Clock, TrendingUp, BarChart3 } from 'lucide-react';
import { requests, spaceUsage, monthlyEvents } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';
import PendingRequestsTable from '../components/Admin/dashboard/PendingRequestsTable';
import { mockRequests } from '../data/requestData';
import { dashboardStyles, dashboardConfig } from '@/utils/dashboardStyles';

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

  // Calcular taxa média de ocupação
  const averageOccupancy = Math.round(
    spaceUsage.reduce((acc, space) => acc + space.usagePercentage, 0) / spaceUsage.length
  );

  // Calcular total de eventos no mês atual
  const currentMonth = new Date().getMonth();
  const currentMonthEvents = monthlyEvents[currentMonth]?.count || 0;

  const pendingRequests = requestsData.filter(request => request.status === 'pending');

  return (
    <Layout title="Dashboard">
      <div style={dashboardStyles.container}>
        <div style={dashboardStyles.statsGrid}>
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
          <StatCard 
            title="Taxa Média de Ocupação" 
            value={`${averageOccupancy}%`}
            icon={<TrendingUp size={24} />}
            color="cyan"
          />
          <StatCard 
            title="Eventos Este Mês" 
            value={currentMonthEvents}
            icon={<BarChart3 size={24} />}
            color="indigo"
          />
        </div>

        {pendingRequests.length > 0 && (
          <div style={dashboardStyles.card}>
            <h2 style={dashboardStyles.sectionTitle}>Solicitações Pendentes</h2>
            <div className="overflow-x-auto">
              <PendingRequestsTable pendingRequests={pendingRequests} />
            </div>
          </div>
        )}
        <div>
          <br></br>
        </div>
        <div style={dashboardStyles.chartsGrid}>
          <SpaceUsageChart data={spaceUsage} />
          <MonthlyEventsChart data={monthlyEvents} />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
