import React, { ReactNode } from 'react';
import { Search } from 'lucide-react';
import NotificationDropdown from './NotificationDropdown';
import { useLocation } from 'react-router-dom';
import { requests } from '../../data/mockData';
import MediaQuery from './utils/MediaQuery';

interface HeaderProps {
  title: string;
  children?: ReactNode;
}

const Header = ({ title, children }: HeaderProps) => {
  return (
    <header style={{
      background: '#ffffff',
      padding: '16px',
      borderBottom: '1px solid #e5e7eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        {children}
        <h1 style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          color: '#1f2937'
        }}>
          {title}
        </h1>
      </div>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
        <MediaQuery query="(min-width: 768px)">
          <div style={{
            position: 'relative',
          }}>
            <input
              type="text"
              placeholder="Buscar..."
              style={{
                paddingLeft: '40px',
                paddingRight: '16px',
                paddingTop: '8px',
                paddingBottom: '8px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                outline: 'none'
              }}
            />
            <Search size={18} style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#9ca3af'
            }} />
          </div>
        </MediaQuery>
        
        <NotificationDropdown requests={requests} />
      </div>
    </header>
  );
};

export default Header;