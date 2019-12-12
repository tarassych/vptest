import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import { playerActions as pa } from '../../actions';
// import { playerConstants as pc } from '../../constants';

import styles from './VideoPlayer.module.css';

const VideoPlayer = () => {
    const dispatch = useDispatch();
    const videoURL = useSelector( (state) => state.player.videoURL );

    const handleLoadButtonClick = function() {
      dispatch(pa.getVideoURL());
      return false;
    }

    return (
      <div className={styles.playerContainer}>
        <video key={videoURL} controls poster="http://html5videoformatconverter.com/data/images/screen.jpg">
          <source src={videoURL} type="video/mp4" />
        </video>
        <br/>
        <br/>
        <button onClick={handleLoadButtonClick}>Load Video URL</button>
      </div>
    );
};

export default VideoPlayer;
