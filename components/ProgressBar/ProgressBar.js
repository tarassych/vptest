import React, { useState, useEffect } from 'react';

import { useSelector } from "react-redux";

// import { playerActions as pa, progressActions as pra } from '../../actions';
// import { playerConstants as pc } from '../../constants';

import styles from './ProgressBar.module.css';

const ProgressBar = () => {
  const [positionProgress, setPositionProgress] = useState(0);
  const [bufferedProgress, setBufferedProgress] = useState(0);

  const duration = useSelector( (state) => state.progress.duration );
  const position = useSelector( (state) => state.progress.position );
  const buffered = useSelector( (state) => state.progress.buffered );

  useEffect(() => {
    calcProgressPecent();
    calcBufferedPecent();
  });

  const calcProgressPecent = () => {
    const progressPercent = (position * 100) / duration;
    setPositionProgress( progressPercent );
  }

  const calcBufferedPecent = () => {
    const bufferedPercent = (buffered * 100) / duration;
    setBufferedProgress( bufferedPercent );
  }

  return (
    <div className={styles.ProgressBarContainer}>
      <div className={styles.DurationBar}>Duration: {duration}</div>
      <div className={styles.PositionBar}>
        <label>Position: {position}</label>
        <div style={{ width: positionProgress+'%' }} className={styles.Progress}/>
      </div>
      <div className={styles.BufferBar}>
        <label>Buffered: {buffered}</label>
        <div style={{ width: bufferedProgress+'%' }} className={styles.Canvas}/>
      </div>
    </div>
  );
};

export default ProgressBar;
