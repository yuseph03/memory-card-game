import { useState, useCallback } from 'react';
import shuffleArray from '../components/utils/shuffleArray';

const useClickCounts = (items, gameOverThreshold) => {
  const [clickCounts, setClickCounts] = useState(() =>
    items.reduce((acc, item) => {
      acc[item.id] = 0;
      return acc;
    }, {})
  );

  const [shuffledItems, setShuffledItems] = useState(() => shuffleArray(items));
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleCardClick = useCallback((id) => {
    setClickCounts((prevCounts) => {
      const newCounts = {
        ...prevCounts,
        [id]: prevCounts[id] + 1,
      };

      if (newCounts[id] > gameOverThreshold) {
        setGameOver(true);
      }

      if (newCounts[id] === 1) {
        setScore((prevScore) => prevScore + 1);
      }

      return newCounts;
    });

    setShuffledItems((prevItems) => shuffleArray(prevItems));
  }, [gameOverThreshold]);

  const resetClickCounts = useCallback(() => {
    setClickCounts(() =>
      items.reduce((acc, item) => {
        acc[item.id] = 0;
        return acc;
      }, {})
    );
    setShuffledItems(shuffleArray(items));
    setGameOver(false);
  }, [items]);

  return [clickCounts, shuffledItems, handleCardClick, resetClickCounts, gameOver, score];
};

export default useClickCounts;
