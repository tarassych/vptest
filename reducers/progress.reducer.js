import { progressConstants as prc } from '../constants';

// initial progress bar state
const initialState = {
  duration: 0,
  buffered: 0,
  position: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case prc.PROGRESS_SET_DURATION:
      return {
        ...state,
        duration: action.duration
      };
    case prc.PROGRESS_SET_BUFFERED:
      return {
        ...state,
        buffered: action.buffered
      };
    case prc.PROGRESS_SET_POSITION:
      return {
        ...state,
        position: action.position
      };
    default:
      return state;
  }
}
