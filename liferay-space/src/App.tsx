import { Routes, Route } from 'react-router-dom';
import {ReservationsProvider} from './contexts/ReservationsContext';
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
import Construction from './pages/Constructuion.tsx';
register();

export function App() {

  return (
    <div>
      <ReservationsProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/SpacesPage" element={<SpacesPage />} />
          <Route path="/Admin" element={<Index/>} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="*" element={<Construction />} />
          <Route path="/forms" element={<ReservationForm />} />
        </Routes>
      </ReservationsProvider>
  
    </div>
    
  )
}


