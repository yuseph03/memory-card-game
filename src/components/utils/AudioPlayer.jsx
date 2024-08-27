import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import '../../styles/AudioPlayer.css';

const AudioPlayer = () => {
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    return (
        <div className="audio-container">
            <ReactHowler
                src={['src/assets/Assassination_Classroom_op2.mp3']}
                playing={!isMuted}
                loop={true}
                volume={1.0}
            />
            <button onClick={toggleMute} className="mute-button">
                {isMuted ? <MdMusicOff /> : <MdMusicNote />}
            </button>
        </div>
    );
};

export default AudioPlayer;
