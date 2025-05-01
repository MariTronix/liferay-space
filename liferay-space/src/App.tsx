import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';

import { useState } from 'react';

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div className={styles.wrapper}>
    <Header />

  
    
    <Footer />

    </div>
    
  )
}


