import { CSSProperties } from 'react';

export const calendarConfig = {
  colors: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    approved: '#10b981',
    pending: '#f59e0b',
    rejected: '#ef4444',
    background: '#f1f5f9',
    cardBackground: '#ffffff',
    textPrimary: '#1e293b',
    textSecondary: '#64748b',
    border: '#cbd5e1',
    hover: '#f8fafc'
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px'
  }
};

export const calendarStyles = {
  container: {
    padding: calendarConfig.spacing.large,
    backgroundColor: calendarConfig.colors.background,
    minHeight: '100vh'
  } as CSSProperties,
  
  header: {
    marginBottom: calendarConfig.spacing.large,
    display: 'flex',
    alignItems: 'center',
    gap: calendarConfig.spacing.medium
  } as CSSProperties,
  
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: calendarConfig.colors.textPrimary,
    margin: 0
  } as CSSProperties,
  
  mainCard: {
    backgroundColor: calendarConfig.colors.cardBackground,
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: calendarConfig.spacing.large
  } as CSSProperties,
  
  eventCard: {
    backgroundColor: calendarConfig.colors.cardBackground,
    border: `1px solid ${calendarConfig.colors.border}`,
    borderRadius: '8px',
    padding: calendarConfig.spacing.medium,
    marginBottom: calendarConfig.spacing.medium,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    borderLeft: '4px solid'
  } as CSSProperties,
  
  detailsPanel: {
    backgroundColor: calendarConfig.colors.hover,
    padding: calendarConfig.spacing.medium,
    borderRadius: '8px',
    border: `1px solid ${calendarConfig.colors.border}`
  } as CSSProperties
};

export const getEventStatusStyle = (status: string) => {
  switch (status) {
    case 'approved':
      return {
        backgroundColor: '#f0fdf4',
        borderLeftColor: calendarConfig.colors.approved,
        color: '#166534'
      };
    case 'pending':
      return {
        backgroundColor: '#fffbeb',
        borderLeftColor: calendarConfig.colors.pending,
        color: '#92400e'
      };
    case 'rejected':
      return {
        backgroundColor: '#fef2f2',
        borderLeftColor: calendarConfig.colors.rejected,
        color: '#991b1b'
      };
    default:
      return {
        backgroundColor: calendarConfig.colors.cardBackground,
        borderLeftColor: calendarConfig.colors.border,
        color: calendarConfig.colors.textPrimary
      };
  }
};