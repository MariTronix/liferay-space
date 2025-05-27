import { CSSProperties } from 'react';

export const reportsConfig = {
  colors: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    accent: '#06b6d4',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    background: '#fafafa',
    cardBackground: '#ffffff',
    textPrimary: '#111827',
    textSecondary: '#6b7280',
    border: '#e5e7eb',
    chartColors: ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444']
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px'
  }
};

export const reportsStyles = {
  container: {
    padding: reportsConfig.spacing.large,
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: reportsConfig.colors.background,
    minHeight: '100vh'
  } as CSSProperties,
  
  header: {
    fontSize: '32px',
    fontWeight: 'bold',
    textAlign: 'center' as const,
    marginBottom: reportsConfig.spacing.xlarge,
    color: reportsConfig.colors.textPrimary,
    background: `linear-gradient(135deg, ${reportsConfig.colors.primary}, ${reportsConfig.colors.secondary})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  } as CSSProperties,
  
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: reportsConfig.spacing.large,
    marginBottom: reportsConfig.spacing.xlarge
  } as CSSProperties,
  
  card: {
    padding: reportsConfig.spacing.large,
    backgroundColor: reportsConfig.colors.cardBackground,
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: `1px solid ${reportsConfig.colors.border}`
  } as CSSProperties,
  
  cardTitle: {
    textAlign: 'center' as const,
    fontSize: '20px',
    fontWeight: '600',
    color: reportsConfig.colors.textPrimary,
    marginBottom: reportsConfig.spacing.medium
  } as CSSProperties,
  
  chartContainer: {
    height: '300px',
    width: '100%'
  } as CSSProperties,
  
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: reportsConfig.spacing.medium
  } as CSSProperties,
  
  statItem: {
    backgroundColor: reportsConfig.colors.background,
    padding: reportsConfig.spacing.medium,
    borderRadius: '8px',
    textAlign: 'center' as const,
    border: `1px solid ${reportsConfig.colors.border}`
  } as CSSProperties,
  
  statLabel: {
    fontSize: '14px',
    color: reportsConfig.colors.textSecondary,
    marginBottom: '4px'
  } as CSSProperties,
  
  statValue: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: reportsConfig.colors.textPrimary
  } as CSSProperties,
  
  insightCard: {
    padding: reportsConfig.spacing.medium,
    borderRadius: '8px',
    marginBottom: reportsConfig.spacing.medium,
    borderLeft: '4px solid'
  } as CSSProperties
};

export const getInsightStyle = (type: 'growth' | 'efficiency' | 'attention') => {
  const baseStyle = reportsStyles.insightCard;
  
  switch (type) {
    case 'growth':
      return {
        ...baseStyle,
        backgroundColor: '#eff6ff',
        borderLeftColor: reportsConfig.colors.accent,
        color: '#1e40af'
      };
    case 'efficiency':
      return {
        ...baseStyle,
        backgroundColor: '#f0fdf4',
        borderLeftColor: reportsConfig.colors.success,
        color: '#166534'
      };
    case 'attention':
      return {
        ...baseStyle,
        backgroundColor: '#fffbeb',
        borderLeftColor: reportsConfig.colors.warning,
        color: '#92400e'
      };
    default:
      return baseStyle;
  }
};