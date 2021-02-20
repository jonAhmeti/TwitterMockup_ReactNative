import * as actionTypes from '../actionTypes/userActionTypes';

let initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.loggedIn:
      return {
        ...state,
        ...action.payload,
      };

    case actionTypes.loggedOut:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
}
