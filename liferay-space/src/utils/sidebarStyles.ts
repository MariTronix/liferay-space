
// Configurações de cores e estilos do sidebar
export const sidebarConfig = {
  colors: {
    // Cores principais
    primary: '#1e40af',        // Azul principal
    primaryDark: '#1e3a8a',    // Azul escuro
    primaryLight: '#bfdbfe',   // Azul claro
    white: '#ffffff',          // Branco
    
    // Você pode alterar essas cores facilmente:
    // primary: '#059669',        // Verde
    // primaryDark: '#047857',    // Verde escuro
    // primaryLight: '#a7f3d0',   // Verde claro
    
    // primary: '#dc2626',        // Vermelho
    // primaryDark: '#b91c1c',    // Vermelho escuro
    // primaryLight: '#fecaca',   // Vermelho claro
  },
  
  sizes: {
    width: '256px',
    padding: '16px',
    borderRadius: '6px',
    iconSize: 20,
    avatarSize: '32px'
  },
  
  fonts: {
    titleSize: '20px',
    subtitleSize: '12px',
    linkSize: '14px',
    userNameSize: '14px',
    userEmailSize: '12px'
  }
};

// Função para gerar estilos baseados na configuração
export const getSidebarStyles = () => {
  const { colors, sizes, fonts } = sidebarConfig;
  
  return {
    sidebar: {
      background: colors.primary,
      color: colors.white,
      borderRight: `1px solid ${colors.primaryDark}`,
      width: sizes.width,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column' as const
    },
    
    header: {
      padding: sizes.padding,
      borderBottom: `1px solid ${colors.primaryDark}`
    },
    
    title: {
      fontSize: fonts.titleSize,
      fontWeight: 'bold',
      margin: 0,
      color: colors.white
    },
    
    subtitle: {
      fontSize: fonts.subtitleSize,
      color: colors.primaryLight,
      margin: 0
    },
    
    activeLink: {
      background: colors.primaryDark,
      color: colors.white,
      fontWeight: '500'
    },
    
    inactiveLink: {
      background: 'transparent',
      color: colors.primaryLight
    },
    
    hoverLink: {
      background: colors.primaryDark,
      color: colors.white
    }
  };
};