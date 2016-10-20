import { combineReducers } from 'redux';
import { createStructuredSelector } from 'reselect';

// Actions
const CREATE_ROOM = '/room/CREATE_ROOM';
const SET_LOCAL_VIDEO_STREAM = '/room/SET_LOCAL_VIDEO_STREAM';

// Action creators
export function createRoom(name) {
  return {
    type: CREATE_ROOM,
    name
  };
}

export function setLocalVideoStream(stream) {
  return {
    type: SET_LOCAL_VIDEO_STREAM,
    stream
  };
}

function reducer(state = {
  roomName: '',
  localStreamUrl: null
}, action) {
  switch (action.type) {
    case CREATE_ROOM:
      return Object.assign({}, state, {
        roomName: action.name
      });
    case SET_LOCAL_VIDEO_STREAM:
      return Object.assign({}, state, {
        localStreamUrl: action.stream
      });
    default:
      return state;
  }
}

export default combineReducers({
  room: reducer
});