import React from 'react';
import { Theme } from 'types';

interface Card2Props {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  onProfile: () => void;
  onLinkedIn: () => void;
  theme: Theme;
}

const Card2: React.FC<Card2Props> = ({ image, title, subtitle, description, onProfile, onLinkedIn, theme }) => {
  return (
    <div 
      className="card-2"
      style={{
        '--card-bg': theme.key === 'dark' ? '#121017' : '#ffffff',
        '--card-text-primary': theme.primaryTextColor,
        '--card-text-secondary': theme.secondaryTextColor,
        '--card-text-tertiary': theme.tertiaryTextColor,
        '--card-shadow': theme.key === 'dark' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(0, 0, 0, 0.08)',
        '--button-border': theme.key === 'dark' ? '#f8f8f8' : '#121017',
        '--button-text': theme.key === 'dark' ? '#f8f8f8' : '#121017',
        '--button-primary-bg': theme.key === 'dark' ? '#ffffff' : '#121017',
        '--button-primary-text': theme.key === 'dark' ? '#121017' : '#ffffff',
      } as React.CSSProperties}
    >
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{description}</p>
        <div className="buttons">
          <button onClick={onProfile}>Main Menu</button>
          <button onClick={onLinkedIn} className="primary">
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card2;