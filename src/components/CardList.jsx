import React, { useState } from 'react';
import './CardList.css';

const CardList = ({ items }) => {
  const [clickCounts, setClickCounts] = useState(() =>
    items.reduce((acc, item) => {
      acc[item.id] = 0;
      return acc;
    }, {})
  );

  const handleCardClick = (id) => {
    setClickCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  };

  return (
    <div className='card-list'>
      {items.map((item) => (
        <div className='card' key={item.id} onClick={() => handleCardClick(item.id)}>
          <img src={item.image.large} alt={`${item.name.first} ${item.name.last}`} />
          <p>{item.name.first} {item.name.last}</p>
          <p>Clicks: {clickCounts[item.id]}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
