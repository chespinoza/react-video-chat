import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import room from '../features/room/duck';

const store = createStore(
  room,
  {
    room: {
      roomName: '',
      localStreamUrl: null
    }
  },
  applyMiddleware(
    thunk,
    createLogger()
  )
);

export default store;