import React from 'react';

import styles from './VideoPlayer.module.css';

const VideoPlayer = () =>
    <div className={styles.playerContainer}>
      <video controls poster="http://html5videoformatconverter.com/data/images/screen.jpg">
        <source src="https://html5videoformatconverter.com/data/images/happyfit2.mp4" type="video/mp4" />
      </video>
    </div>;

export default VideoPlayer;
