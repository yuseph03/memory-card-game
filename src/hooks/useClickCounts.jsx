import { useState, useCallback, useEffect } from 'react';
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
  const [wrongClickCount, setWrongClickCount] = useState(0);
  const [score, setScore] = useState(0);
  const [lastClickedId, setLastClickedId] = useState(null);

  const handleCardClick = useCallback((id) => {
    setLastClickedId(id);

    setClickCounts((prevCounts) => {
      const newCounts = {
        ...prevCounts,
        [id]: prevCounts[id] + 1,
      };

      if (newCounts[id] > gameOverThreshold) {
        setGameOver(true);
      }

      return newCounts;
    });

    setShuffledItems((prevItems) => shuffleArray(prevItems));
  }, [gameOverThreshold]);

  useEffect(() => {
    if (lastClickedId && clickCounts[lastClickedId] <= 1) {
      setScore((prevScore) => prevScore + 1);
    }

    if (lastClickedId && clickCounts[lastClickedId] > 1) {
      setWrongClickCount((prevCount) => prevCount + 1)
    }

    if (wrongClickCount > gameOverThreshold) {
      setGameOver(true);
    }
    
  }, [lastClickedId, clickCounts]);

  const resetClickCounts = useCallback(() => {
    setClickCounts(() =>
      items.reduce((acc, item) => {
        acc[item.id] = 0;
        return acc;
      }, {})
    );
    setShuffledItems(shuffleArray(items));
    setGameOver(false);
    setScore(0);
    setLastClickedId(null);
  }, [items]);

  return [clickCounts, shuffledItems, handleCardClick, resetClickCounts, gameOver, score];
};

export default useClickCounts;
