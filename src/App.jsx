import React  from 'react';
import AudioPlayer from './components/utils/AudioPlayer';
import InitChars from './components/InitChars';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <AudioPlayer/>
      <h1 className="title">Assassination Classroom 暗殺教室</h1>
      <InitChars />
    </div>
  );
};

export default App;
