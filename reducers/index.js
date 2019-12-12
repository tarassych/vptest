import { combineReducers } from 'redux';

import player from './player.reducer';


const rootReducer = combineReducers({
  player,
  // registration,
  // users,
  // alert
});

export default rootReducer;
