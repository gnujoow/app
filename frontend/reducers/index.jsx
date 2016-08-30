import { combineReducers } from 'redux';
import TweetsReducer from './reducer_tweets';
import FollowersReducer from './reducer_followers';

const rootReducer = combineReducers({
  tweets: TweetsReducer,
  followers: FollowersReducer
});

export default rootReducer;
