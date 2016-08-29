import axios from 'axios';

export const FETCH_TWEETS = 'FETCH_TWEETS';

export function fetchTweets(){
  const request = axios.get(`/tweets`);

  return {
    type: FETCH_TWEETS,
    payload: request
  };
}
