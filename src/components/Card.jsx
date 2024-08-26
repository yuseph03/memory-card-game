import React from 'react';
import { motion } from 'framer-motion';
  
const Card = ({ item, clickCount, onClick }) => {
  return (
    <motion.div
      className="card"
      onClick={() => onClick(item.id)}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      key={item.id}
    >
      <img
        src={item.image.large}
        alt={`${item.name.first} ${item.name.last}`}
        className="card-image"
      />
      <p className="card-name">
        {item.name.first} {item.name.last}
      </p>
      <p className="card-clicks">Clicks: {clickCount}</p>
    </motion.div>
  );
};

export default Card;
