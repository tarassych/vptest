import React from 'react';
import ProgressBar from '../ProgressBar';

import { useDispatch, useSelector } from "react-redux";

import { playerActions as pa, progressActions as pra } from '../../actions';
// import { playerConstants as pc } from '../../constants';

import styles from './VideoPlayer.module.css';

const VideoPlayer = () => {
    const dispatch = useDispatch();
    const videoURL = useSelector( (state) => state.player.videoURL );

    const handleLoadButtonClick = function() {
      dispatch(pa.getVideoURL());
      return false;
    }

    const handleOnProgress = ({target}) => {
      console.log('buffer');
      console.log(target.buffered);
      
    }

    const handleDataLoaded = ({target}) => {
      // console.log('duration');
      // console.log(target.duration);
      dispatch(pra.updateProgress({duration: target.duration}));
    }

    const handleTimeUpdate = ({target}) => {
      // console.log('time');
      // console.log(target.currentTime);
      dispatch(pra.updateProgress({position: target.currentTime}));
    }

    return (
      <div className={styles.playerContainer}>
        <video
          key={videoURL}
          onTimeUpdate={handleTimeUpdate}
          onLoadedData={handleDataLoaded}
          onProgress={handleOnProgress}
          controls
          poster="http://html5videoformatconverter.com/data/images/screen.jpg"
        >
          <source src={videoURL} type="video/mp4" />
        </video>
        <br/>
        <br/>
        <button onClick={handleLoadButtonClick}>Load Video URL</button>
        <br/>
        <br/>
        <ProgressBar />
      </div>
    );
};

export default VideoPlayer;
