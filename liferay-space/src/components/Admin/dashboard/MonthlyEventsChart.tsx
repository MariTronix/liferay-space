import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { MonthlyEventsData } from '../../../types';
import { dashboardConfig } from '../../../utils/dashboardStyles';

interface MonthlyEventsChartProps {
  data: MonthlyEventsData[];
}

const MonthlyEventsChart = ({ data }: MonthlyEventsChartProps) => {
  return (
    <div style={{
      backgroundColor: dashboardConfig.colors.cardBackground,
      padding: dashboardConfig.spacing.large,
      borderRadius: '12px',
      border: `1px solid ${dashboardConfig.colors.border}`,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h3 style={{
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: dashboardConfig.spacing.medium,
        color: dashboardConfig.colors.textPrimary
      }}>
        Eventos por Mês
      </h3>
      <div style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={dashboardConfig.colors.border} />
            <XAxis 
              dataKey="month" 
              tick={{ fill: dashboardConfig.colors.textSecondary }} 
            />
            <YAxis 
              allowDecimals={false} 
              tick={{ fill: dashboardConfig.colors.textSecondary }} 
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: dashboardConfig.colors.cardBackground,
                border: `1px solid ${dashboardConfig.colors.border}`,
                borderRadius: '8px'
              }}
            />
            <Bar
              dataKey="count"
              name="Número de Eventos"
              fill={dashboardConfig.colors.primary}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyEventsChart;