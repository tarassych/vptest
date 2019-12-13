import { playerConstants as pc } from '../constants';

// initial player state
const initialState = {
  videoURL: '',
  isLoading: false,
  loadingError: false,
  currentState: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case pc.PLAYER_REQUEST_POST:
      return {
        ...state,
        isLoading: true,
        currentState: 'Making API request',
      };
    case pc.PLAYER_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        loadingError: true,
        currentState: 'Error: API request Failed',
      };
    case pc.PLAYER_REQUEST_OK:
      return {
        ...state,
        isLoading: false,
        videoURL: action.url,
        currentState: 'API request OK',
      };
    default:
      return state;
  }
}
