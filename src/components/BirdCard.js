import React from 'react';
import '../styles/BirdCard.css';  

const BirdCard = ({ bird }) => (
  <div className="bird-card">
    <img src={bird.image} alt={bird.name} />
    <h3>{bird.name}</h3>
    <p>{bird.description}</p>
  </div>
);

export default BirdCard;
