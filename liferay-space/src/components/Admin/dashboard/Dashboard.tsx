import React, { useState } from 'react';
import Layout from '../Layout';
import StatCard from './StatCard';
import { Calendar, CheckCircle2, Clock, PieChart } from 'lucide-react';

const Dashboard = () => {
  // Dados de exemplo - substitua pelos seus dados reais
  const stats = {
    pendingRequests: 2,
    todayEvents: 0,
    approvedEvents: 1,
    occupancyRate: 4,
    monthlyEvents: 11
  };

  return (
    <Layout title="Dashboard">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <StatCard 
            title="Solicitações Pendentes" 
            value={stats.pendingRequests}
            icon={<Clock size={16} />}
            color="indigo"
          />
          
          <StatCard 
            title="Eventos Hoje" 
            value={stats.todayEvents}
            icon={<Calendar size={16} />}
            color="cyan"
          />
          
          <StatCard 
            title="Eventos Aprovados" 
            value={stats.approvedEvents}
            icon={<CheckCircle2 size={16} />}
            change={{ value: 12, positive: true }}
            color="purple"
          />
          
          <StatCard 
            title="Taxa Média de Ocupação" 
            value={`${stats.occupancyRate}%`}
            icon={<PieChart size={16} />}
            color="orange"
          />
          
          <StatCard 
            title="Eventos Este Mês" 
            value={stats.monthlyEvents}
            icon={<Calendar size={16} />}
            color="cyan"
          />
        </div>

        {/* Resto do seu dashboard */}
      </div>
    </Layout>
  );
};

export default Dashboard;