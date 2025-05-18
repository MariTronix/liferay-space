import React, { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  change?: {
    value: number;
    positive: boolean;
  };
  color?: string;
}

const StatCard = ({ title, value, icon, change, color = "primary" }: StatCardProps) => {
  const colorClasses = {
    primary: "text-primary-500 bg-primary-50",
    cyan: "text-cyan-500 bg-cyan-50",
    indigo: "text-indigo-500 bg-indigo-50",
    purple: "text-purple-500 bg-purple-50",
  };

  const selectedColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.primary;

  return (
    <div className="stat-card">
      <div className="flex justify-between items-start mb-4">
        <div className="text-sm text-gray-500 font-medium">{title}</div>
        <div className={`p-2 rounded-full ${selectedColor}`}>
          {icon}
        </div>
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      {change && (
        <div className="flex items-center text-sm">
          <span className={`${change.positive ? 'text-green-500' : 'text-red-500'} mr-1`}>
            {change.positive ? '↑' : '↓'} {Math.abs(change.value)}%
          </span>
          <span className="text-gray-500">em relação ao mês anterior</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;