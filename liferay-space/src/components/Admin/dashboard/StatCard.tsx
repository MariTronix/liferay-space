import React, { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  change?: {
    value: number;
    positive: boolean;
  };
  color?: 'primary' | 'cyan' | 'indigo' | 'purple' | 'orange';
}

const StatCard = ({ title, value, icon, change, color = 'primary' }: StatCardProps) => {
  // Definindo as cores baseadas na prop color
  const colorStyles = {
    primary: {
      bg: '#e0f2fe',
      text: '#0369a1',
      iconBg: '#bae6fd'
    },
    cyan: {
      bg: '#cffafe',
      text: '#0e7490',
      iconBg: '#a5f3fc'
    },
    indigo: {
      bg: '#e0e7ff',
      text: '#4338ca',
      iconBg: '#c7d2fe'
    },
    purple: {
      bg: '#f3e8ff',
      text: '#7e22ce',
      iconBg: '#e9d5ff'
    },
    orange: {
      bg: '#ffedd5',
      text: '#c2410c',
      iconBg: '#fed7aa'
    }
  };

  const selectedColor = colorStyles[color] || colorStyles.primary;

  // Estilos do container principal
  const cardStyle = {
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column' as const,
    height: '100%',
    minWidth: '180px'
  };

  // Estilos do cabeçalho (título + ícone)
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px'
  };

  // Estilos do título
  const titleStyle = {
    fontSize: '14px',
    fontWeight: 500,
    color: '#4b5563',
    margin: 0
  };

  // Estilos do container do ícone
  const iconContainerStyle = {
    padding: '8px',
    borderRadius: '50%',
    backgroundColor: selectedColor.iconBg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  // Estilos do valor principal
  const valueStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937',
    margin: 0,
    lineHeight: 1.2
  };

  // Estilos da variação (quando houver)
  const changeStyle = {
    fontSize: '12px',
    color: change?.positive ? '#10b981' : '#ef4444',
    fontWeight: 500,
    marginLeft: '4px'
  };

  // Estilos do rodapé (container da variação)
  const footerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '8px'
  };

  // Estilos do texto de referência
  const referenceStyle = {
    fontSize: '12px',
    color: '#6b7280',
    marginLeft: '4px'
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <div style={iconContainerStyle}>
          {React.cloneElement(icon as React.ReactElement, { 
            size: 16,
            color: selectedColor.text 
          })}
        </div>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <p style={valueStyle}>{value}</p>
        {change && (
          <span style={changeStyle}>
            {change.positive ? '↑' : '↓'} {Math.abs(change.value)}%
          </span>
        )}
      </div>

      {change && (
        <div style={footerStyle}>
          <span style={referenceStyle}>em relação ao mês anterior</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;