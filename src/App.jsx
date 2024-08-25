import React from 'react';
import InitChars from './components/InitChars';
import AudioPlayer from './components/AudioPlayer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1 className="title">Assassination Classroom 暗殺教室</h1>
      <AudioPlayer/>
      <InitChars/>
    </div>
  );
};

export default App;
