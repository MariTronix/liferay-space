import React, { useState } from 'react';
import styles from './Header.module.css';

// VERIFIQUE: Estes caminhos estão 100% corretos no seu projeto?
import logoLiferayPath from '../assets/imgLogos/liferay-logo.png';
import iconMenuHamburguerPath from '../assets/icons/bars-solid.svg';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.lowerHeader}>
        <button type="button" className={styles.logoButton}>
          <img src={logoLiferayPath} alt="Liferay Logo" className={styles.logoImage} />
        </button>
        
        {/* Navegação principal para DESKTOP */}
        <nav className={styles.mainNav}>
          <a href="/">Home</a>
          <a href="/SpacesPage">Espaços</a>
          <a href="/forms">Reserva</a>
          <a href="/admin">Entra</a>
        </nav>

        {/* Botão do Menu Hambúrguer para MOBILE */}
        <button type="button" className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
          {/* VERIFIQUE: O ícone SVG está sendo carregado? */}
          <img src={iconMenuHamburguerPath} alt="Menu" className={styles.icon} />
          {/* DESCOMENTE A LINHA ABAIXO PARA TESTAR SE O BOTÃO APARECE: */}
          {/* TESTE_BTN */}
        </button>
      </div>

      {/* Menu dropdown que aparece quando isMobileMenuOpen é true */}
      {isMobileMenuOpen && (
        <nav className={styles.mobileMenu}>
          <a href="/">Home</a>
          <a href="/SpacesPage">Espaços</a>
          <a href="/forms">Eventos</a> {/* Nota: no seu mainNav está "/forms Reserva", aqui está "/forms Eventos" */}
          <a href="/Admin">Entrar</a>
        </nav>
      )}
    </header>
  );
}