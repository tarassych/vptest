import React, { useState, useEffect }from 'react';

import { useSelector } from "react-redux";

// import { playerActions as pa, progressActions as pra } from '../../actions';
// import { playerConstants as pc } from '../../constants';

import styles from './ProgressBar.module.css';

const ProgressBar = () => {
  const [positionProgress, setPositionProgress] = useState(0);

  const duration = useSelector( (state) => state.progress.duration );
  const position = useSelector( (state) => state.progress.position );

  useEffect(() => {
    calcProgressPecent();
  });

  const calcProgressPecent = () => {
    const progressPercent = (position * 100) / duration;
    setPositionProgress( progressPercent );
  }

  return (
    <div className={styles.ProgressBarContainer}>
      <div className={styles.DurationBar}>Duration: {duration}</div>
      <div className={styles.PositionBar}>
        <label>Position: {position}</label>
        <div style={{ width: positionProgress+'%' }} className={styles.Progress}/>
      </div>
    </div>
  );
};

export default ProgressBar;
