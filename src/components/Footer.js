/* Ashishkumar Talpada
Student Number - 8909834 */

import React from 'react';
import '../styles/Footer.css';  // Updated path

const Footer = () => (
  <footer className="footer">
    <p>© 2024 Birdes. All Rights Reserved.</p>
    <div className="social-icons">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon facebook"><i className="fab fa-facebook-f"></i></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon twitter"><i className="fab fa-twitter"></i></a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram"><i className="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="icon linkedin"><i className="fab fa-linkedin-in"></i></a>
    </div>
  </footer>
);

export default Footer;
