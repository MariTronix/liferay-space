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
      name: 'Inicio', 
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

  // Estilos do sidebar
  const sidebarStyle = {
    background: '#1e40af', // Azul principal
    color: 'white',
    borderRight: '1px solid #1e3a8a',
    width: '256px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const
  };

  // Estilos do cabeçalho
  const headerStyle = {
    padding: '16px',
    borderBottom: '1px solid #1e3a8a'
  };

  // Estilos do título
  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: 0
  };

  // Estilos do subtítulo
  const subtitleStyle = {
    fontSize: '12px',
    color: '#bfdbfe',
    margin: 0
  };

  // Estilos da navegação
  const navStyle = {
    flex: 1,
    padding: '16px',
    overflowY: 'auto' as const
  };

  // Estilos da lista
  const listStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  // Estilos do item da lista
  const listItemStyle = {
    marginBottom: '4px'
  };

  // Estilos do link ativo
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

  // Estilos do link inativo
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

  // Estilos do link hover
  const hoverLinkStyle = {
    ...inactiveLinkStyle,
    background: '#1e3a8a',
    color: 'white'
  };

  // Estilos do ícone
  const iconStyle = {
    marginRight: '12px'
  };

  // Estilos do footer
  const footerStyle = {
    padding: '16px',
    borderTop: '1px solid #1e3a8a'
  };

  // Estilos do perfil
  const profileStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  // Estilos do avatar
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

  // Estilos da info do usuário
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
