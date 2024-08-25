import React, { useState, useEffect } from 'react';
import { shuffleArray } from './utils/shuffleArray';
import sound from '../assets/flip.mp3';
import Card from './Card';
import './CardList.css';
import {Howl} from 'howler';

var flipSound = new Howl({
    src: [sound]
});
  
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
    flipSound.play();
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
