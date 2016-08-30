import axios from 'axios';

export const FETCH_TWEETS = 'FETCH_TWEETS';
export const FETCH_FOLLWERS = 'FETCH_FOLLWERS';

export function fetchTweets(){
  const request = axios.get(`/tweets`);

  return {
    type: FETCH_TWEETS,
    payload: request
  };
}

export function fetchFollowers() {
  const request = axios.get(`/followers/random`);

  return{
    type: FETCH_FOLLWERS,
    payload: request
  };
}
