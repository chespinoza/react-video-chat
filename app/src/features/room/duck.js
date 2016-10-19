import { combineReducers } from 'redux';
import { createStructuredSelector } from 'reselect';

// Actions
const CREATE_ROOM = '/home/CREATE_ROOM';

// Action creators
export function createRoom(name) {
  return {
    type: CREATE_ROOM,
    name
  };
}

export function 