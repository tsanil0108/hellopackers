import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import About from './pages/About';
import Information from './pages/Information';
import Contact from './pages/Contact';
import Network from './pages/Network';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="about" element={<About />} />
        <Route path="information" element={<Information />} />
        <Route path="network" element={<Network />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}