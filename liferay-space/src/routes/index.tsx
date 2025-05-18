import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Requests from '../pages/Requests';
import Calendar from '../pages/Calendar';
import Reports from '../pages/Reports';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;