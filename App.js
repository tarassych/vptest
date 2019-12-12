import React from 'react';

import VideoPlayer from './components/VideoPlayer';

import styles from './App.module.css';

const App = () =>
  <div className={styles.app}>
    <h3>Video Player Sample App</h3>
    <VideoPlayer />
  </div>;

export default App;
