import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { SpaceUsageData } from '../../../types';
import { dashboardConfig } from '../../../utils/dashboardStyles';

interface SpaceUsageChartProps {
  data: SpaceUsageData[];
}

const SpaceUsageChart = ({ data }: SpaceUsageChartProps) => {
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
        Taxa de Ocupação dos Espaços
      </h3>
      <div style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={dashboardConfig.colors.border} />
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              tick={{ fontSize: 12, fill: dashboardConfig.colors.textSecondary }}
              height={60}
            />
            <YAxis
              tickFormatter={(value) => `${value}%`}
              domain={[0, 100]}
              tick={{ fill: dashboardConfig.colors.textSecondary }}
            />
            <Tooltip 
              formatter={(value) => `${value}%`}
              contentStyle={{
                backgroundColor: dashboardConfig.colors.cardBackground,
                border: `1px solid ${dashboardConfig.colors.border}`,
                borderRadius: '8px'
              }}
            />
            <Bar
              dataKey="usagePercentage"
              name="Taxa de Ocupação"
              fill={dashboardConfig.colors.secondary}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SpaceUsageChart;
