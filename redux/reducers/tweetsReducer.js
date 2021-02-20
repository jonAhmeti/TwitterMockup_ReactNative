import * as actionTypes from '../actionTypes/tweetActionTypes';

let initialState = [];

export default function tweetsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.updated:
      return [...action.payload];
    default:
      return [...state];
  }
}
