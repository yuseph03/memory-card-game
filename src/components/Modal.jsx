import React from 'react';
import '../styles/Modal.css';

const Modal = ({ show, type, onStartGame }) => {
  if (!show) return null;

  return (
    <div className="anime-modal-overlay">
      <div className="anime-modal-content">
        <h2 className="anime-modal-title">
          {type === 'start' ? 'Welcome to the Game!' : 'Game Over!'}
        </h2>
        <p>
          {type === 'start' ? 'Choose difficulty:' : null}
        </p>
        {type === 'start' ? (
          <>
            <button className="anime-modal-button" onClick={onStartGame}>
              Start Game
            </button>
            <button className="repo-modal-button">
              <a href="https://github.com/yuseph03/memory-card-game">Github Repo</a>
            </button>
          </>
        ) : (
          <button className="anime-modal-button" onClick={onStartGame}>
            Start New Game
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
