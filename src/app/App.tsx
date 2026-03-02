import { Navigate, Route, Routes } from 'react-router';
import { AppLayout } from './layout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ApproachPage } from './pages/ApproachPage';
import { ProofPage } from './pages/ProofPage';
import { LegalPage } from './pages/LegalPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/approach" element={<ApproachPage />} />
        <Route path="/proof" element={<ProofPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
