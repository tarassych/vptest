import React, { useState, useEffect }from 'react';
import ProgressBar from '../ProgressBar';

import { useDispatch, useSelector } from "react-redux";

import { playerActions as pa, progressActions as pra } from '../../actions';
// import { playerConstants as pc } from '../../constants';

import styles from './VideoPlayer.module.css';

const VideoPlayer = () => {
    const dispatch = useDispatch();
    const videoURL = useSelector( (state) => state.player.videoURL );
    const currentState = useSelector( (state) => state.player.currentState );
    const isLoading = useSelector( (state) => state.player.isLoading );

    const [playerError, setPlayerError] = useState(false);

    const handleLoadButtonClick = () => {
      if ( isLoading ) return false;

      setPlayerError(false);

      dispatch(pa.getVideoURL());
      return false;
    }

    const handleOnError = () => {
      setPlayerError('Error Loading Media File: ' + videoURL);
    }

    const handleOnProgress = ({target}) => {
      // console.log('buffer');
      // console.log(target.buffered);
      if ( target.buffered.length > 0 )
      {
        for (let i = 0; i < target.buffered.length; i++) {
          // set latest buffered position
          dispatch(pra.updateProgress({buffered: target.buffered.end(i)}));
        }
      }
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
          onError={handleOnError}
          controls
          poster="http://html5videoformatconverter.com/data/images/screen.jpg"
        >
          <source src={videoURL} type="video/mp4" />
        </video>
        <br/>
        <br/>
        <button
          disabled={isLoading}
          onClick={handleLoadButtonClick}
        >
          Load Video URL
        </button>
        <br/>
        <br/>
        <label>{currentState}</label>
        <br/>
        { (videoURL && playerError)
          ? <label>{playerError}</label>
          : null
        }
        <br/>
        <ProgressBar />
      </div>
    );
};

export default VideoPlayer;
