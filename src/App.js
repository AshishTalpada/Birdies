/* Ashishkumar Talpada
Student Number - 8909834 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import Birds from './pages/Birds';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/birds" element={<Birds />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </>
);

export default App;
