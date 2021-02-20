import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/userReducer';
import tweetsReducer from './reducers/tweetsReducer';

const rootReducer = combineReducers({
  currentUser: userReducer,
  tweets: tweetsReducer,
});

const store = createStore(rootReducer);

export default store;
