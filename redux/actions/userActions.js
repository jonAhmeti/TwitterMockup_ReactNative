import * as actionTypes from '../actionTypes/userActions';

export function loggedIn(user) {
  return {
    type: actionTypes.LoggedIn,
    payload: user,
  };
}

export function loggedOut() {
  return {
    type: actionTypes.LoggedOut,
    payload: null,
  };
}
