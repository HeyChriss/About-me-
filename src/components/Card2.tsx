import React from 'react';

interface Card2Props {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  onProfile: () => void;
  onLinkedIn: () => void;
}

const Card2: React.FC<Card2Props> = ({ image, title, subtitle, description, onProfile, onLinkedIn }) => {
  return (
    <div className="card-2">
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{description}</p>
        <div className="buttons">
          <button onClick={onProfile}>Profile</button>
          <button onClick={onLinkedIn} className="primary">
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card2;