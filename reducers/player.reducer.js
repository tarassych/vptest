import { playerConstants as pc } from '../constants';

// initial player state
const initialState = {
  videoURL: '',
  isLoading: false,
  loadingError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case pc.PLAYER_REQUEST_POST:
      return {
        ...state,
        isLoading: true,
      };
    case pc.PLAYER_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        loadingError: true,
      };
    case pc.PLAYER_REQUEST_OK:
      return {
        ...state,
        isLoading: false,
        videoURL: action.url
      };
    default:
      return state;
  }
}
