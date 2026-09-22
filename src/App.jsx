import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        {/* HOME */}
        <Route
          index
          element={<Home />}
        />

        {/* SERVICES */}
        <Route
          path="/services"
          element={<ServicesPage />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* PRIVACY POLICY */}
        <Route
          path="/privacy"
          element={<PrivacyPolicy />}
        />

      </Route>
    </Routes>
  );
}