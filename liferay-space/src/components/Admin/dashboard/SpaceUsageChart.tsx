import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { SpaceUsageData } from '../../../types';

interface SpaceUsageChartProps {
  data: SpaceUsageData[];
}

const SpaceUsageChart = ({ data }: SpaceUsageChartProps) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Taxa de Ocupação dos Espaços</h3>
      <div className="h-64">
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
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              tick={{ fontSize: 12 }}
              height={60}
            />
            <YAxis
              tickFormatter={(value) => `${value}%`}
              domain={[0, 100]}
            />
            <Tooltip formatter={(value) => `${value}%`} />
            <Bar
              dataKey="usagePercentage"
              name="Taxa de Ocupação"
              fill="#0B5FFF"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SpaceUsageChart;