import React from 'react';
import { Request } from '../../../types';
import RequestStatusBadge from '../RequestStatusBadge';
import { Link } from 'react-router-dom';
import { colors, spacing, fontSizes, fontWeights, borderRadii } from '../../../utils/styleUtils';
import MediaQuery from '../utils/MediaQuery';

interface PendingRequestsTableProps {
  pendingRequests: Request[];
}

const PendingRequestsTable: React.FC<PendingRequestsTableProps> = ({ pendingRequests }) => {
  // Common styles
  const cardStyle: React.CSSProperties = {
    backgroundColor: colors.white,
    borderRadius: '0.5rem',
    border: `1px solid ${colors.gray200}`,
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
  };

  const tableWrapperStyle: React.CSSProperties = {
    overflowX: 'auto'
  };

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
    fontSize: fontSizes.sm
  };

  const tableHeadStyle: React.CSSProperties = {
    backgroundColor: colors.gray50
  };

  const tableHeadCellStyle: React.CSSProperties = {
    padding: `${spacing.md} ${spacing.lg}`,
    textAlign: 'left',
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.medium,
    color: colors.gray500,
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  const tableCellStyle: React.CSSProperties = {
    padding: `${spacing.md} ${spacing.lg}`,
    borderBottom: `1px solid ${colors.gray200}`
  };

  const rowStyle = (index: number): React.CSSProperties => ({
    backgroundColor: index % 2 === 0 ? colors.white : colors.gray50,
  });

  const buttonStyle: React.CSSProperties = {
    fontSize: fontSizes.xs,
    backgroundColor: colors.primary,
    color: colors.white,
    padding: `${spacing.xs} ${spacing.sm}`,
    borderRadius: borderRadii.md,
    textDecoration: 'none',
    display: 'inline-block'
  };

  const mobileInfoStyle: React.CSSProperties = {
    fontSize: fontSizes.xs,
    color: colors.gray500,
    display: 'block',
  };

  return (
    <div style={cardStyle}>
      <div style={tableWrapperStyle}>
        <table style={tableStyle}>
          <thead style={tableHeadStyle}>
            <tr>
              <th style={tableHeadCellStyle}>Evento</th>
              <MediaQuery query="(min-width: 768px)">
                <th style={tableHeadCellStyle}>Solicitante</th>
                <th style={tableHeadCellStyle}>Espaço</th>
              </MediaQuery>
              <MediaQuery query="(min-width: 640px)">
                <th style={tableHeadCellStyle}>Data</th>
              </MediaQuery>
              <th style={tableHeadCellStyle}>Status</th>
              <th style={{...tableHeadCellStyle, textAlign: 'right'}}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pendingRequests.map((request, index) => (
              <tr key={request.id} style={rowStyle(index)}>
                <td style={tableCellStyle}>
                  <div style={{ fontWeight: fontWeights.medium, color: colors.gray900 }}>{request.title}</div>
                  <MediaQuery query="(max-width: 767px)">
                    <div style={mobileInfoStyle}>
                      {new Date(request.eventDate).toLocaleDateString('pt-BR')}
                    </div>
                  </MediaQuery>
                </td>
                <MediaQuery query="(min-width: 768px)">
                  <td style={tableCellStyle}>
                    <div style={{ color: colors.gray900 }}>{request.requesterName}</div>
                    <div style={{ fontSize: fontSizes.xs, color: colors.gray500 }}>{request.requesterEmail}</div>
                  </td>
                  <td style={tableCellStyle}>
                    <div style={{ color: colors.gray900 }}>{request.spaceName}</div>
                    <div style={{ fontSize: fontSizes.xs, color: colors.gray500 }}>{request.attendees} pessoas</div>
                  </td>
                </MediaQuery>
                <MediaQuery query="(min-width: 640px)">
                  <td style={tableCellStyle}>
                    <div style={{ color: colors.gray900 }}>{new Date(request.eventDate).toLocaleDateString('pt-BR')}</div>
                    <div style={{ fontSize: fontSizes.xs, color: colors.gray500 }}>{request.startTime} - {request.endTime}</div>
                  </td>
                </MediaQuery>
                <td style={tableCellStyle}>
                  <RequestStatusBadge status={request.status} />
                </td>
                <td style={{...tableCellStyle, textAlign: 'right'}}>
                  <Link to="/requests" style={buttonStyle}>
                    Detalhes
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingRequestsTable;