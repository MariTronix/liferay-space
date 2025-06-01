import React from 'react';
import Layout from '../components/Admin/Layout';
import StatCard from '../components/Admin/dashboard/StatCard';
import SpaceUsageChart from '../components/Admin/dashboard/SpaceUsageChart';
import MonthlyEventsChart from '../components/Admin/dashboard/MonthlyEventsChart';
import { Calendar, Users, Building2, Clock, TrendingUp, BarChart3 } from 'lucide-react';
import { spaceUsage, monthlyEvents } from '@/data/mockData'; 
import { useToast } from '@/hooks/use-toast'; 
import PendingRequestsTable from '../components/Admin/dashboard/PendingRequestsTable';
import { useReservations } from '../contexts/ReservationsContext';
import { dashboardStyles } from '@/utils/dashboardStyles';

const Index = () => {
  const { toast } = useToast();
  const { reservations } = useReservations(); 
  console.log('[Index/DashboardAdmin] Reservations recebidas do contexto:', reservations);

  const pendingCount = reservations.filter(r => r.status === 'pending').length;
  const approvedCount = reservations.filter(r => r.status === 'approved').length;
  const todayEvents = reservations.filter(r => {
    const today = new Date().toISOString().split('T')[0];
    return r.eventDate === today && r.status === 'approved';
  }).length;

  const averageOccupancy = spaceUsage.length > 0 ? Math.round(
    spaceUsage.reduce((acc, space) => acc + space.usagePercentage, 0) / spaceUsage.length
  ) : 0;
  
  const currentMonth = new Date().getMonth();
  const dynamicCurrentMonthEvents = reservations.filter(r => {
    const eventDate = new Date(r.eventDate + 'T00:00:00');
    return eventDate.getMonth() === currentMonth && r.status === 'approved';
  }).length;

  const pendingRequests = reservations.filter(request => request.status === 'pending');
  console.log('[Index/DashboardAdmin] Pending requests para a tabela:', pendingRequests);

  return (
    <Layout title="Dashboard">
      <div style={dashboardStyles.container}>
        <div style={dashboardStyles.statsGrid}>
          <StatCard title="Solicitações Pendentes" value={pendingCount} icon={<Clock size={24} />} color="cyan" />
          <StatCard title="Eventos Aprovados" value={approvedCount} icon={<Calendar size={24} />} />
          <StatCard title="Espaços Disponíveis" value={spaceUsage.length} icon={<Building2 size={24} />} color="indigo" />
          <StatCard title="Eventos Hoje" value={todayEvents} icon={<Users size={24} />} color="purple" />
          <StatCard title="Taxa Média de Ocupação" value={`${averageOccupancy}%`} icon={<TrendingUp size={24} />} color="cyan" />
          <StatCard title="Eventos Este Mês" value={dynamicCurrentMonthEvents} icon={<BarChart3 size={24} />} color="indigo" />
        </div>

        {pendingRequests.length > 0 ? (
          <div style={dashboardStyles.card}>
            <h2 style={dashboardStyles.sectionTitle}>Solicitações Pendentes</h2>
            <div className="overflow-x-auto"> 
              <PendingRequestsTable pendingRequests={pendingRequests} />
            </div>
          </div>
        ) : (
          <div style={dashboardStyles.card}>
             <h2 style={dashboardStyles.sectionTitle}>Solicitações Pendentes</h2>
             <p style={{padding: '1rem', textAlign: 'center', color: typeof dashboardStyles.sectionTitle !== 'string' ? dashboardStyles.sectionTitle?.color : '#6b7280'}}>
                Nenhuma solicitação pendente no momento.
             </p>
          </div>
        )}
        <div><br /></div>
        <div style={dashboardStyles.chartsGrid}>
          <SpaceUsageChart data={spaceUsage} />
          <MonthlyEventsChart data={monthlyEvents} />
        </div>
      </div>
    </Layout>
  );
};

export default Index;