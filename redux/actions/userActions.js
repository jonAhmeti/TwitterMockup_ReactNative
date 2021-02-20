import * as actionTypes from '../actionTypes/userActionTypes';

export function loggedIn(user) {
  return {
    type: actionTypes.loggedIn,
    payload: user,
  };
}

export function loggedOut() {
  return {
    type: actionTypes.loggedOut,
    payload: null,
  };
}
