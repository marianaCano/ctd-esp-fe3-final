import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import DentistDetail from './pages/DentistDetail';
import Favorites from './pages/Favorites';

function App() {
  const [theme, setTheme] = useState('light'); 

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme; 
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); 
    document.body.className = newTheme; 
  };

  return (
    <Router>
      <Navbar toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dentist/:id" element={<DentistDetail />} />
        <Route path="/favs" element={<Favorites />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
