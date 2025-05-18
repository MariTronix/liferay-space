import React, { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Menu } from 'lucide-react';
import MediaQuery from './utils/MediaQuery';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Overlay style
  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    zIndex: 40,
    background: 'rgba(0, 0, 0, 0.5)',
    transition: 'opacity 0.3s ease',
    opacity: isSidebarOpen ? 1 : 0,
    pointerEvents: isSidebarOpen ? 'auto' : 'none'
  };

  // Mobile sidebar style
  const sidebarStyle: React.CSSProperties = {
    position: 'fixed',
    inset: '0 auto 0 0', // instead of insetY
    zIndex: 50,
    transition: 'transform 0.3s ease',
    transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
    width: '256px',
  };

  // Button style
  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    borderRadius: '6px',
    color: '#2563eb',
  };

  // Main content style
  const mainStyle: React.CSSProperties = {
    flexGrow: 1,
    padding: '12px',
    overflow: 'auto',
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: '#f9fafb'
    }}>
      {/* Mobile sidebar overlay */}
      <div 
        style={overlayStyle} 
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      
      {/* Sidebar - mobile */}
      <div style={sidebarStyle}>
        <Sidebar />
      </div>
      
      {/* Sidebar - desktop */}
      <MediaQuery query="(min-width: 1024px)">
        <div style={{
          position: 'relative',
          width: '256px',
        }}>
          <Sidebar />
        </div>
      </MediaQuery>
      
      {/* Main content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        minWidth: 0
      }}>
        <Header title={title}>
          <MediaQuery query="(max-width: 1023px)">
            <button 
              onClick={toggleSidebar} 
              style={buttonStyle}
            >
              <Menu size={24} />
            </button>
          </MediaQuery>
        </Header>
        
        <main style={mainStyle}>
          <MediaQuery query="(min-width: 768px)">
            <div style={{ padding: '12px' }}>
              {children}
            </div>
          </MediaQuery>
          
          <MediaQuery query="(max-width: 767px)">
            <div>
              {children}
            </div>
          </MediaQuery>
        </main>
      </div>
    </div>
  );
};

export default Layout;
