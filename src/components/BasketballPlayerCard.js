import React from 'react';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  const getCardClassName = (name) => {
    switch (name) {
      case 'LeBron James':
        return 'player-card brown';
      case 'Muggsy Bogues':
        return 'player-card blue';
      case 'Spud Webb':
        return 'player-card orange';
      case 'Michael Jordan':
        return 'player-card red';
      case 'Kobe Bryant':
        return 'player-card yellow';
      default:
        return 'player-card';
    }
  };

  return (
    <div className={getCardClassName(name)}>
      <img src={image} alt={`${name}`} className="player-image" />
      <div className="player-info">
        <h2 className="player-name">{name}</h2>
        <p className="player-position">{position}</p>
        <div className="player-stats">
          <p>Points per Game: {stats.pointsPerGame}</p>
          <p>Assists per Game: {stats.assistsPerGame}</p>
          <p>Rebounds per Game: {stats.reboundsPerGame}</p>
        </div>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;