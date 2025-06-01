import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { HardHat } from 'lucide-react'; // Ícone para "em construção"

// Constantes de Cor (mantidas do seu código original)
const COLOR_PRIMARY = '#3b82f6'; 
const COLOR_PRIMARY_HOVER = '#2563eb'; 
const TEXT_PRIMARY_COLOR = COLOR_PRIMARY; // Pode ser uma cor diferente para "em construção", ex: laranja
const TAILWIND_GRAY_100 = '#f3f4f6';
const TAILWIND_GRAY_600 = '#4b5563';
const TAILWIND_GRAY_700 = '#374151';
const CONSTRUCTION_ICON_COLOR = '#F59E0B'; // Um tom de laranja/âmbar para o ícone

const UnderConstructionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  useEffect(() => {
    // Log pode ser ajustado ou removido se não for mais uma página de "erro"
    console.warn(
      `Aviso: Acesso à página em construção: ${location.pathname}`
    );
  }, [location.pathname]);

  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: TAILWIND_GRAY_100,
    padding: '1rem',
    fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', // Fonte mantida
  };

  const cardStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '32rem', // Um pouco maior para acomodar mais texto se necessário
    backgroundColor: '#ffffff',
    borderRadius: '0.75rem', // Aumentando um pouco o borderRadius
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)', // Sombra um pouco mais pronunciada
    padding: '2.5rem', // Mais padding
    textAlign: 'center',
  };

  const iconContainerStyle: React.CSSProperties = {
    marginBottom: '1.5rem',
    color: CONSTRUCTION_ICON_COLOR,
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '2.25rem', // Equivalente a text-4xl
    lineHeight: '2.5rem',
    fontWeight: 'bold',
    color: TAILWIND_GRAY_700, // Cor mais escura para o título principal
    marginBottom: '1rem',
  };

  const paragraph1Style: React.CSSProperties = {
    fontSize: '1.125rem', // Equivalente a text-lg
    lineHeight: '1.75rem',
    color: TAILWIND_GRAY_600,
    marginBottom: '1.5rem',
  };

  const paragraph2Style: React.CSSProperties = {
    color: TAILWIND_GRAY_600,
    marginBottom: '2.5rem',
    fontSize: '1rem',
  };

  const buttonBaseStyle: React.CSSProperties = {
    backgroundColor: COLOR_PRIMARY,
    color: '#ffffff',
    fontWeight: '600',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out',
    fontSize: '1rem',
    display: 'inline-flex', // Para alinhar ícone se adicionar um
    alignItems: 'center',
    gap: '0.5rem',
  };

  const buttonHoverStyle: React.CSSProperties = {
    ...buttonBaseStyle,
    backgroundColor: COLOR_PRIMARY_HOVER,
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <div style={iconContainerStyle}>
          <HardHat size={64} strokeWidth={1.5} /> {/* Ícone de construção */}
        </div>
        <h1 style={headingStyle}>Página em Construção</h1>
        <p style={paragraph1Style}>
          Estamos trabalhando duro para trazer esta página até você!
        </p>
        <p style={paragraph2Style}>
          Novas funcionalidades e conteúdos incríveis estão a caminho. 
          Por favor, volte em breve para conferir as novidades.
        </p>
        <button
          style={isButtonHovered ? buttonHoverStyle : buttonBaseStyle}
          onClick={() => navigate("/")} // Navega para a página inicial
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Voltar ao Início
        </button>
      </div>
    </div>
  );
};

export default UnderConstructionPage;