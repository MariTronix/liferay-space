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

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    zIndex: 40,
    background: 'rgba(0, 0, 0, 0.5)',
    transition: 'opacity 0.3s ease',
    opacity: isSidebarOpen ? 1 : 0,
    pointerEvents: isSidebarOpen ? 'auto' : 'none'
  };

  const mobileSidebarStyle: React.CSSProperties = {
    position: 'fixed',
    inset: '0 auto 0 0',
    zIndex: 50,
    transition: 'transform 0.3s ease',
    transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
    width: '256px',
  };

  const mobileMenuButtonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    borderRadius: '6px',
    color: '#2563eb',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  };

 const mainContentStyle: React.CSSProperties = {
    flexGrow: 1,
    
    padding: '24px 32px',
    overflowY: 'auto',
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: '#f8fafb' 
    }}>
      <MediaQuery query="(max-width: 1023px)">
        <div 
          style={overlayStyle} 
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      </MediaQuery>
      
      <MediaQuery query="(max-width: 1023px)">
        <div style={mobileSidebarStyle}>
          <Sidebar />
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 1024px)">
        <div style={{
          position: 'relative',
          width: '256px',
          flexShrink: 0 
        }}>
          <Sidebar />
        </div>
      </MediaQuery>
      
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
              style={mobileMenuButtonStyle}
            >
              <Menu size={24} />
            </button>
          </MediaQuery>
        </Header>
        
        <main style={mainContentStyle}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;