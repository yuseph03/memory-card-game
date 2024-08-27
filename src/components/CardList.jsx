import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Card from './Card';
import useClickCounts from '../hooks/useClickCounts';
import Modal from './Modal'; 
import '../styles/CardList.css';

const CardList = ({ items }) => {
  const gameOverThreshold = 10; 
  const [clickCounts, shuffledItems, handleCardClick, resetClickCounts, gameOver, score] = useClickCounts(items, gameOverThreshold);
  const [showStartModal, setShowStartModal] = useState(true);

  const handleStartGame = () => {
    setShowStartModal(false);
    resetClickCounts();
  };

  return (
    <div>
      <Modal show={showStartModal} type="start" onStartGame={handleStartGame} />
      <Modal show={gameOver} type="end" onStartGame={handleStartGame} />
      <h2 className="score-display">Score: {score}</h2>
      <AnimatePresence>
        <div className="card-list">
          {shuffledItems.map((item) => (
            <Card
              key={item.id}
              item={item}
              clickCount={clickCounts[item.id]}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default CardList;
