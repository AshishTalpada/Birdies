/* Ashishkumar Talpada
Student Number - 8909834 */
import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';
import 'leaflet/dist/leaflet.css';


// Create a root for rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using the root object
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
