import { progressConstants as prc } from "../constants";

const setDuration = (duration) => {
    return {
      type: prc.PROGRESS_SET_DURATION,
      duration
    };
};

const setBuffered = (buffered) => {
    return {
      type: prc.PROGRESS_SET_BUFFERED,
      buffered
    };
};

const setPosition = (position) => {
    return {
      type: prc.PROGRESS_SET_POSITION,
      position
    };
};

const updateProgress = ({duration, buffered, position}) => dispatch => {
  if (duration) dispatch(setDuration(duration));

  if (buffered) dispatch(setBuffered(buffered));
  
  if (position) dispatch(setPosition(position));
}


export const progressActions = {
    updateProgress,
};
