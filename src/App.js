import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Pages from './components/Pages';
import Contacts from './components/Contacts';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
