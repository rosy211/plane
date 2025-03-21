import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Bell, UserCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Language from './components/Language';
import Culture from './components/Culture';
import Laws from './components/Laws';
import Medical from './components/Medical';
import Accommodations from './components/Accommodations';
import CountrySelector from './components/CountrySelector';
import PersonalInfo from './components/PersonalInfo';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/language" element={<Language />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/laws" element={<Laws />} />
            <Route path="/medical" element={<Medical />} />
            <Route path="/accommodations" element={<Accommodations />} />
            <Route path="/country-selector" element={<CountrySelector />} />
            <Route path="/personal-info" element={<PersonalInfo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;