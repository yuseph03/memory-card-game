import React from 'react';
import InitChars from './components/InitChars';
import AudioPlayer from './components/utils/AudioPlayer';
import Modal from './components/Modal';
import { useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [modalType, setModalType] = useState('start');

  const startGame = () => {
    setShowModal(false);
  };

  const showGameOverModal = () => {
    setModalType('gameOver');
    setShowModal(true);
  };

  useEffect(() => {
    setTimeout(showGameOverModal, 10000);
  }, []);
  
  return (
    <div className="App">
      <Modal
        show={showModal}
        type={modalType}
        onStartGame={startGame}
      />
      <h1 className="title">Assassination Classroom 暗殺教室</h1>
      <InitChars />
      <AudioPlayer/>
    </div>
  );
};

export default App;
