import React from 'react';

import styles from './VideoPlayer.module.css';

const VideoPlayer = () =>
    <div className={styles.playerContainer}>
      <video controls poster="http://simplycoaching.com/wp-content/uploads/2018/04/Icon-Video-SimplyCoaching-BestPersonalCoachColorado.png">
        <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
      </video>
    </div>;

export default VideoPlayer;
