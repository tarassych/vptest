import fetch from 'cross-fetch';

import { playerConstants as pc } from "../constants";

const startApiRequest = () => {
    return {
      type: pc.PLAYER_REQUEST_POST
    }
}

const failApiRequest = () => {
    return {
      type: pc.PLAYER_REQUEST_FAIL
    }
}

const successApiRequest = (url) => {
    return {
      type: pc.PLAYER_REQUEST_OK,
      url
    }
}


const getVideoURL = () => dispatch => {
  dispatch(startApiRequest());

  return fetch('https://dev.tso.com/get_video_url.php?timestamp='+Date.now())
    .then( res => {
      // console.log(res);

      if ( res.status >= 400 ) {
        dispatch(failApiRequest());
      }

      return res.json();
    })
    .then( json => {
      // console.log(json);

      dispatch(successApiRequest(json.url));
    })
    .catch( error => {
      dispatch(failApiRequest());
    });
}

export const playerActions = {
    getVideoURL,
};
