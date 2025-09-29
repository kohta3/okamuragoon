import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Terms from './pages/Terms.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photolog/privacy" element={<PrivacyPolicy />} />
      <Route path="/photolog/term" element={<Terms />} />
    </Routes>
  );
}


