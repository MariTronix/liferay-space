import React from 'react';
import { colors, fontSizes, fontWeights } from '../../utils/styleUtils';

interface RequestStatusBadgeProps {
  status: 'pending' | 'approved' | 'rejected';
}

const RequestStatusBadge: React.FC<RequestStatusBadgeProps> = ({ status }) => {
  const getStatusStyles = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      display: 'inline-block',
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.semibold,
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingTop: '2px',
      paddingBottom: '2px',
      borderRadius: '9999px',
    };
    
    switch (status) {
      case 'pending':
        return {
          ...baseStyle,
          backgroundColor: '#fef3c7', 
          color: '#92400e',
        };
      case 'approved':
        return {
          ...baseStyle,
          backgroundColor: '#d1fae5',
          color: '#065f46',
        };
      case 'rejected':
        return {
          ...baseStyle,
          backgroundColor: '#fee2e2', 
          color: '#b91c1c',
        };
      default:
        return baseStyle;
    }
  };

  const statusText: Record<string, string> = {
    pending: 'Pendente',
    approved: 'Aprovado',
    rejected: 'Rejeitado'
  };

  return (
    <span style={getStatusStyles()}>
      {statusText[status]}
    </span>
  );
};

export default RequestStatusBadge;