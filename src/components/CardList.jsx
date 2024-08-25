import React, { useState, useEffect } from 'react';
import Card from './Card';
import { shuffleArray } from './utils/shuffleArray';
import './CardList.css';

const CardList = ({ items }) => {
  const [clickCounts, setClickCounts] = useState(() =>
    items.reduce((acc, item) => {
      acc[item.id] = 0;
      return acc;
    }, {})
  );

  const [shuffledItems, setShuffledItems] = useState(() => shuffleArray(items));

  const handleCardClick = (id) => {
    setClickCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
    setShuffledItems(shuffleArray(shuffledItems));
  };

  useEffect(() => {
    setShuffledItems(shuffleArray(items));
  }, [items]);

  return (
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
  );
};

export default CardList;
