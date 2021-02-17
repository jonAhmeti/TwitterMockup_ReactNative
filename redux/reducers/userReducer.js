import * as actionTypes from '../actionTypes/userActions';

let initialState = {};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LoggedIn:
      return {
        ...state,
        ...action.payload,
      };

    case actionTypes.LoggedOut:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
}
