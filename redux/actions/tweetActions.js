import * as actionTypes from '../actionTypes/tweetActionTypes';

export function updated(tweets) {
  return {
    type: actionTypes.updated,
    payload: tweets,
  };
}
