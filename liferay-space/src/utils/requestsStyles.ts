import { CSSProperties } from 'react';

export const requestsConfig = {
  colors: {
    primary: '#2563eb',
    secondary: '#64748b',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    background: '#f8fafc',
    cardBackground: '#ffffff',
    textPrimary: '#1f2937',
    textSecondary: '#6b7280',
    border: '#e5e7eb'
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px'
  }
};

export const requestsStyles = {
  container: {
    padding: requestsConfig.spacing.large,
    backgroundColor: requestsConfig.colors.background,
    minHeight: '100vh'
  } as CSSProperties,
  
  header: {
    marginBottom: requestsConfig.spacing.large,
    padding: requestsConfig.spacing.medium,
    backgroundColor: requestsConfig.colors.cardBackground,
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
  } as CSSProperties,
  
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: requestsConfig.colors.textPrimary,
    margin: 0
  } as CSSProperties,
  
  tableContainer: {
    backgroundColor: requestsConfig.colors.cardBackground,
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  } as CSSProperties
};