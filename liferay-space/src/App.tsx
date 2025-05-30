import { Routes, Route } from 'react-router-dom';
import { Home } from './HomePage.tsx';
import { SpacesPage } from './SpacesPage.tsx';  
import { ReservationForm } from '@/formulario/reservationforms';
import Index from './pages/Index.tsx'
import './App.css';
import styles from './App.module.css';
import Calendar from './pages/Calendar.tsx'
import Requests from './pages/Requests.tsx';
import Reports from './pages/Reports.tsx';
import NotFound from './pages/NotFound.tsx';
import './global.css';

import { register } from 'swiper/element/bundle';
register();

export function App() {

  return (
    <div className={styles.wrapper}>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/SpacesPage.tsx" element={<SpacesPage />} />
        <Route path="/Admin" element={<Index/>} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/forms" element={<ReservationForm />} />
    </Routes>
    </div>
    
  )
}


