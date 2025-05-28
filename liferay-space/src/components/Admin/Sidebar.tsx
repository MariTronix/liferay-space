import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home,
  LayoutDashboard, 
  Calendar, 
  ListChecks,
  BarChart4,
  Settings,
  HomeIcon
} from 'lucide-react';

const Sidebar = () => {
  const navLinks = [
    { 
      name: 'Início', 
      path: '/', 
      icon: <HomeIcon size={20} /> 
    },
    { 
      name: 'Dashboard', 
      path: '/admin', 
      icon: <LayoutDashboard size={20} /> 
    },
    { 
      name: 'Solicitações', 
      path: '/requests', 
      icon: <ListChecks size={20} /> 
    },
    { 
      name: 'Calendário', 
      path: '/calendar', 
      icon: <Calendar size={20} /> 
    },
    { 
      name: 'Relatórios', 
      path: '/reports', 
      icon: <BarChart4 size={20} /> 
    },
    { 
      name: 'Configurações', 
      path: '/settings', 
      icon: <Settings size={20} /> 
    },
  ];

  const sidebarStyle = {
    background: '#1e40af', 
    color: 'white',
    borderRight: '1px solid #1e3a8a',
    width: '256px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const
  };

  const headerStyle = {
    padding: '16px',
    borderBottom: '1px solid #1e3a8a'
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: 0
  };

  const subtitleStyle = {
    fontSize: '12px',
    color: '#bfdbfe',
    margin: 0
  };

  const navStyle = {
    flex: 1,
    padding: '16px',
    overflowY: 'auto' as const
  };

  const listStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const listItemStyle = {
    marginBottom: '4px'
  };

  const activeLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    borderRadius: '6px',
    textDecoration: 'none',
    color: 'white',
    background: '#1e3a8a',
    fontWeight: '500'
  };

  const inactiveLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    borderRadius: '6px',
    textDecoration: 'none',
    color: '#bfdbfe',
    background: 'transparent',
    transition: 'all 0.2s'
  };

  const hoverLinkStyle = {
    ...inactiveLinkStyle,
    background: '#1e3a8a',
    color: 'white'
  };

  const iconStyle = {
    marginRight: '12px'
  };

  const footerStyle = {
    padding: '16px',
    borderTop: '1px solid #1e3a8a'
  };

  const profileStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  const avatarStyle = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: '#bfdbfe',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1e40af',
    fontWeight: 'bold'
  };

  const userInfoStyle = {
    marginLeft: '12px'
  };

  const userNameStyle = {
    fontSize: '14px',
    fontWeight: '500',
    color: 'white',
    margin: 0
  };

  const userEmailStyle = {
    fontSize: '12px',
    color: '#bfdbfe',
    margin: 0
  };

  return (
    <div style={sidebarStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>
          <span style={{color: 'white'}}>Liferay</span>Spaces
        </h1>
        <p style={subtitleStyle}>Painel Administrativo</p>
      </div>

      <nav style={navStyle}>
        <ul style={listStyle}>
          {navLinks.map((link) => (
            <li key={link.path} style={listItemStyle}>
              <NavLink 
                to={link.path} 
                style={({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    Object.assign(e.currentTarget.style, hoverLinkStyle);
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    Object.assign(e.currentTarget.style, inactiveLinkStyle);
                  }
                }}
              >
                <span style={iconStyle}>{link.icon}</span>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div style={footerStyle}>
        <div style={profileStyle}>
          <div style={avatarStyle}>
            A
          </div>
          <div style={userInfoStyle}>
            <p style={userNameStyle}>Admin</p>
            <p style={userEmailStyle}>admin@empresa.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
