// src/components/Card.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

interface CardProps {
  image: string;
  title: string;
  type: string;
  description: string;
  buttonText: string;
  buttonLink: string; 
}

const Card: React.FC<CardProps> = ({ image, title, type, description, buttonText, buttonLink }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <h3>Type: {type}</h3>
        <p>{description}</p>
        {buttonLink.startsWith('http') ? (
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            <button>{buttonText}</button>
          </a>
        ) : (
          <Link to={buttonLink}>
            <button>{buttonText}</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
