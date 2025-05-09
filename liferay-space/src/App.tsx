import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { Home } from './HomePage.tsx';
import { SpacesPage } from './SpacesPage.tsx';

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div className={styles.wrapper}>
    <Header />
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/SpacesPage.tsx" element={<SpacesPage />} />
    </Routes>
  

    <Footer />
    </div>
    
  )
}


