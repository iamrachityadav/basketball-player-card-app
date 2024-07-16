import React from 'react';
import BasketballPlayerCard from './components/BasketballPlayerCard';
import './App.css';

function App() {
  const players = [
    {
      name: 'LeBron James',
      image: 'LeBron James.jpg',
      position: 'Forward',
      stats: {
        pointsPerGame: 25.4,
        assistsPerGame: 7.1,
        reboundsPerGame: 10.5
      }
    },
    {
      name: 'Muggsy Bogues',
      image: 'Muggsy Bogues.jpg',
      position: 'Guard',
      stats: {
        pointsPerGame: 7.7,
        assistsPerGame: 7.6,
        reboundsPerGame: 2.6
      }
    },
    {
      name: 'Spud Webb',
      image: 'Spud Webb.jpg',
      position: 'Guard',
      stats: {
        pointsPerGame: 9.9,
        assistsPerGame: 5.3,
        reboundsPerGame: 2.1
      }
    },
    {
      name: 'Michael Jordan',
      image: 'Michael Jordan.jpg',
      position: 'Guard',
      stats: {
        pointsPerGame: 30.1,
        assistsPerGame: 5.3,
        reboundsPerGame: 6.2
      }
    },
    {
      name: 'Kobe Bryant',
      image: 'Kobe Bryant.jpg',
      position: 'Guard',
      stats: {
        pointsPerGame: 25.0,
        assistsPerGame: 4.7,
        reboundsPerGame: 5.2
      }
    },
  ];

  return (
    <div className="App">
      <h1 className="app-title">Basketball Player Cards</h1>
      <div className="player-cards-container">
        {players.map((player, index) => (
          <BasketballPlayerCard
            key={index}
            name={player.name}
            image={player.image}
            position={player.position}
            stats={player.stats}
          />
        ))}
      </div>
    </div>
  );
}

export default App;