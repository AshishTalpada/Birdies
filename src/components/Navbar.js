/* Ashishkumar Talpada
Student Number - 8909834 */

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';  

const Navbar = () => (
  <nav className="navbar">
    <h1>Birdes</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/birds">Birds</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
