import React, { useEffect, useState } from "react"; // Adicionado useState
import { useLocation, useNavigate } from "react-router-dom";

const COLOR_PRIMARY = '#3b82f6'; 
const COLOR_PRIMARY_HOVER = '#2563eb'; 
const TEXT_PRIMARY_COLOR = COLOR_PRIMARY;
const TAILWIND_GRAY_100 = '#f3f4f6';
const TAILWIND_GRAY_600 = '#4b5563';
const TAILWIND_GRAY_700 = '#374151';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  useEffect(() => {
    console.error(
      `404 Error: Tentativa de acesso à rota inexistente: ${location.pathname}`
    );
  }, [location.pathname]);

  const pageStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: TAILWIND_GRAY_100,
    padding: '1rem', // Equivalente a p-4
    fontFamily: 'sans-serif', // Adicionando uma fonte base
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '28rem',
    backgroundColor: '#ffffff',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', // Equivalente a shadow-md
    padding: '2rem',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '3.75rem',
    lineHeight: '1',
    fontWeight: 'bold',
    color: TEXT_PRIMARY_COLOR,
    marginBottom: '1rem',
  };

  const paragraph1Style = {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    color: TAILWIND_GRAY_700,
    marginBottom: '1.5rem',
  };

  const paragraph2Style = {
    color: TAILWIND_GRAY_600,
    marginBottom: '2rem',
    fontSize: '1rem',
  };

  const buttonBaseStyle = {
    backgroundColor: COLOR_PRIMARY,
    color: '#ffffff',
    fontWeight: '600',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out',
    fontSize: '1rem',
  };

  const buttonHoverStyle = {
    ...buttonBaseStyle,
    backgroundColor: COLOR_PRIMARY_HOVER,
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>404</h1>
        <p style={paragraph1Style}>
          Oops! Página não encontrada
        </p>
        <p style={paragraph2Style}>
          A página que você está procurando não existe ou foi movida para outro
          endereço.
        </p>
        <button
          style={isButtonHovered ? buttonHoverStyle : buttonBaseStyle}
          onClick={() => navigate("/")}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Voltar ao Início
        </button>
      </div>
    </div>
  );
};

export default NotFound;