import React from 'react';
import Layout from '../components/Admin/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Admin/ui/card';
import { 
  ChartContainer, 
  ChartTooltip,
  ChartTooltipContent
} from '../components/Admin/ui/chart';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Cell
} from 'recharts';

const monthlyEventsData = [
  { name: 'Jan', value: 12 },
  { name: 'Fev', value: 19 },
  { name: 'Mar', value: 15 },
  { name: 'Abr', value: 22 },
  { name: 'Mai', value: 28 },
  { name: 'Jun', value: 25 },
];

const spaceUsageData = [
  { name: 'S. Pangeia', value: 75 },
  { name: 'S. Elementos', value: 60 },
  { name: 'S. Beleza', value: 45 },
  { name: 'S. Amor', value: 50 },
  { name: 'S. Vaidade', value: 40 },
  { name: 'S. Essência', value: 55 },
  { name: 'Auditório', value: 80 },
  { name: 'Varanda', value: 95 },
  { name: 'Sala jogos', value: 65 },
];

interface ChartData {
  name: string;
  value: number;
}

const COLORS = ['#9b87f5', '#F97316', '#0EA5E9', '#8B5CF6', '#ea384c'];

const Reports = () => {
  const containerStyle = {
    paddingLeft: '20px',
    paddingRight: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const chartCardStyle = {
    margin: '10px 0',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    borderRadius: '12px',
    overflow: 'hidden',
  };

  const chartContainerStyle = {
    height: '300px', // Increased height for better visibility
    width: '100%',
    padding: '10px',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '20px',
    textAlign: 'center' as const,
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
    marginBottom: '30px',
  };

  const mediaQueryLargeStyle = {
    '@media (min-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
    },
  };

  const cardTitleStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'center' as const,
    marginBottom: '10px',
  };

  const statBoxStyle = {
    backgroundColor: '#f9fafb',
    borderRadius: '10px',
    padding: '16px',
    textAlign: 'center' as const,
  };

  const statLabelStyle = {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '8px',
  };

  const statValueStyle = {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: '#1f2937',
  };

  const insightBoxStyle = {
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '16px',
    borderLeftWidth: '4px',
    borderLeftStyle: 'solid' as const,
  };

  const insightTitleStyle = {
    fontWeight: '500',
    marginBottom: '4px',
  };

  const insightTextStyle = {
    fontSize: '0.875rem',
    color: '#4b5563',
  };

  return (
    <Layout title="Relatórios">
      <div style={containerStyle}>
        <h2 style={headingStyle}>Análise de Dados</h2>
        
        <div style={{...gridStyle, ...mediaQueryLargeStyle}}>
          {/* Monthly Events Chart */}
          <Card style={chartCardStyle}>
            <CardHeader>
              <div style={cardTitleStyle}>Eventos por Mês</div>
            </CardHeader>
            <CardContent>
              <div style={chartContainerStyle}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyEventsData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tickSize={0} />
                    <YAxis width={30} tickSize={0} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                        border: 'none'
                      }} 
                    />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                      {monthlyEventsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Space Usage Chart */}
          <Card style={chartCardStyle}>
            <CardHeader>
              <div style={cardTitleStyle}>Taxa de Ocupação (%)</div>
            </CardHeader>
            <CardContent>
              <div style={chartContainerStyle}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={spaceUsageData}
                    layout="vertical"
                    margin={{ top: 20, right: 20, left: 80, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <XAxis type="number" domain={[0, 100]} tickSize={0} />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      width={80}
                      tickSize={0}
                      tick={{fontSize: 11}}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                        border: 'none'
                      }} 
                      formatter={(value) => [`${value}%`, 'Ocupação']}
                    />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                      {spaceUsageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Summary Statistics */}
          <Card style={chartCardStyle}>
            <CardHeader>
              <div style={cardTitleStyle}>Estatísticas Gerais</div>
            </CardHeader>
            <CardContent>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
                <div style={statBoxStyle}>
                  <div style={statLabelStyle}>Total de Eventos</div>
                  <div style={statValueStyle}>487</div>
                </div>
                <div style={statBoxStyle}>
                  <div style={statLabelStyle}>Espaço Mais Usado</div>
                  <div style={statValueStyle}>Varanda</div>
                </div>
                <div style={statBoxStyle}>
                  <div style={statLabelStyle}>Taxa Média</div>
                  <div style={statValueStyle}>68%</div>
                </div>
                <div style={statBoxStyle}>
                  <div style={statLabelStyle}>Eventos Este Mês</div>
                  <div style={statValueStyle}>28</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trends */}
          <Card style={chartCardStyle}>
            <CardHeader>
              <div style={cardTitleStyle}>Tendências e Insights</div>
            </CardHeader>
            <CardContent>
              <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                <div style={{
                  backgroundColor: '#EDF5FF',
                  borderLeftColor: '#0B5FFF',
                  padding: '16px',
                  borderRadius: '8px',
                  marginBottom: '16px',
                  borderLeftWidth: '4px',
                  borderLeftStyle: 'solid' as 'solid'
                }}>
                  <div style={{...insightTitleStyle, color: '#0B5FFF'}}>Crescimento</div>
                  <div style={insightTextStyle}>Aumento de 23% nos eventos em relação ao mesmo período do ano passado.</div>
                </div>
                <div style={{
                  backgroundColor: '#ECFDF5',
                  borderLeftColor: '#10b981',
                  padding: '16px',
                  borderRadius: '8px',
                  marginBottom: '16px',
                  borderLeftWidth: '4px',
                  borderLeftStyle: 'solid' as 'solid'
                }}>
                  <div style={{...insightTitleStyle, color: '#10b981'}}>Eficiência</div>
                  <div style={insightTextStyle}>As salas menores apresentam melhor aproveitamento de capacidade máxima.</div>
                </div>
                <div style={{
                  backgroundColor: '#FFFBEB',
                  borderLeftColor: '#f59e0b',
                  padding: '16px',
                  borderRadius: '8px',
                  marginBottom: '16px',
                  borderLeftWidth: '4px',
                  borderLeftStyle: 'solid' as 'solid'
                }}>
                  <div style={{...insightTitleStyle, color: '#f59e0b'}}>Atenção</div>
                  <div style={insightTextStyle}>A sala Beleza tem sido subutilizada nos últimos 3 meses.</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
