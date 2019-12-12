import { combineReducers } from 'redux';

import player from './player.reducer';
import progress from './progress.reducer';


const rootReducer = combineReducers({
  player,
  progress
});

export default rootReducer;
