import React from 'react';
import Layout from '../components/Admin/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Admin/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Cell
} from 'recharts';
import { reportsStyles, reportsConfig, getInsightStyle } from '../utils/ReportsStyles';

// Dados dos eventos por mês
const monthlyEventsData = [
  { name: 'Jan', value: 12 },
  { name: 'Fev', value: 19 },
  { name: 'Mar', value: 15 },
  { name: 'Abr', value: 22 },
  { name: 'Mai', value: 28 },
  { name: 'Jun', value: 25 },
];

// Dados de uso dos espaços
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

// Cores para os gráficos
const COLORS = ['#9b87f5', '#F97316', '#0EA5E9', '#8B5CF6', '#ea384c'];

const Reports = () => {
  return (
    <Layout title="Relatórios">
      <div style={reportsStyles.container}>
        <h2 style={reportsStyles.header}>
          Análise de Dados
        </h2>
        
        <div style={reportsStyles.gridContainer}>
          {/* Gráfico de Eventos por Mês */}
          <div style={reportsStyles.card}>
            <h3 style={reportsStyles.cardTitle}>Eventos por Mês</h3>
            <div style={reportsStyles.chartContainer}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyEventsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={reportsConfig.colors.border} />
                  <XAxis dataKey="name" tick={{ fill: reportsConfig.colors.textSecondary }} />
                  <YAxis tick={{ fill: reportsConfig.colors.textSecondary }} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: reportsConfig.colors.cardBackground,
                      border: `1px solid ${reportsConfig.colors.border}`,
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {monthlyEventsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={reportsConfig.colors.chartColors[index % reportsConfig.colors.chartColors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Gráfico de Ocupação */}
          <div style={reportsStyles.card}>
            <h3 style={reportsStyles.cardTitle}>Taxa de Ocupação (%)</h3>
            <div style={reportsStyles.chartContainer}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={spaceUsageData}
                  layout="vertical"
                  margin={{ left: 80 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={reportsConfig.colors.border} />
                  <XAxis type="number" domain={[0, 100]} tick={{ fill: reportsConfig.colors.textSecondary }} />
                  <YAxis dataKey="name" type="category" width={80} tick={{ fill: reportsConfig.colors.textSecondary }} />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Ocupação']}
                    contentStyle={{
                      backgroundColor: reportsConfig.colors.cardBackground,
                      border: `1px solid ${reportsConfig.colors.border}`,
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {spaceUsageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={reportsConfig.colors.chartColors[index % reportsConfig.colors.chartColors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Estatísticas */}
          <div style={reportsStyles.card}>
            <h3 style={reportsStyles.cardTitle}>Estatísticas Gerais</h3>
            <div style={reportsStyles.statsGrid}>
              <div style={reportsStyles.statItem}>
                <div style={reportsStyles.statLabel}>Total de Eventos</div>
                <div style={reportsStyles.statValue}>487</div>
              </div>
              <div style={reportsStyles.statItem}>
                <div style={reportsStyles.statLabel}>Espaço Mais Usado</div>
                <div style={reportsStyles.statValue}>Varanda</div>
              </div>
              <div style={reportsStyles.statItem}>
                <div style={reportsStyles.statLabel}>Taxa Média</div>
                <div style={reportsStyles.statValue}>68%</div>
              </div>
              <div style={reportsStyles.statItem}>
                <div style={reportsStyles.statLabel}>Eventos Este Mês</div>
                <div style={reportsStyles.statValue}>28</div>
              </div>
            </div>
          </div>

          {/* Insights */}
          <div style={reportsStyles.card}>
            <h3 style={reportsStyles.cardTitle}>Tendências e Insights</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: reportsConfig.spacing.medium }}>
              <div style={getInsightStyle('growth')}>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Crescimento</div>
                <div style={{ fontSize: '14px' }}>
                  Aumento de 23% nos eventos em relação ao mesmo período do ano passado.
                </div>
              </div>
              
              <div style={getInsightStyle('efficiency')}>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Eficiência</div>
                <div style={{ fontSize: '14px' }}>
                  As salas menores apresentam melhor aproveitamento de capacidade máxima.
                </div>
              </div>
              
              <div style={getInsightStyle('attention')}>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Atenção</div>
                <div style={{ fontSize: '14px' }}>
                  A sala Beleza tem sido subutilizada nos últimos 3 meses.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
