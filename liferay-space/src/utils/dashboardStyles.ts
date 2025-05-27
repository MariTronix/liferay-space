import { CSSProperties } from 'react';

export const dashboardConfig = {
  colors: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#06b6d4',
    background: '#f8fafc',
    cardBackground: '#ffffff',
    textPrimary: '#1e293b',
    textSecondary: '#64748b',
    border: '#e2e8f0',
    hover: '#f1f5f9'
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px'
  }
};

export const dashboardStyles = {
  container: {
    padding: dashboardConfig.spacing.large,
    backgroundColor: dashboardConfig.colors.background,
    minHeight: '100vh'
  } as CSSProperties,
  
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: dashboardConfig.spacing.medium,
    marginBottom: dashboardConfig.spacing.large
  } as CSSProperties,
  
  chartsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: dashboardConfig.spacing.large,
    marginBottom: dashboardConfig.spacing.large
  } as CSSProperties,
  
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: dashboardConfig.colors.textPrimary,
    marginBottom: dashboardConfig.spacing.medium
  } as CSSProperties,
  
  card: {
    backgroundColor: dashboardConfig.colors.cardBackground,
    borderRadius: '12px',
    padding: dashboardConfig.spacing.large,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: `1px solid ${dashboardConfig.colors.border}`
  } as CSSProperties
};