import { FETCH_TWEETS } from '../actions';

const INITIAL_STATE = { all: [], tweet: null};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_TWEETS:
      return {...state, all: action.payload.data };
    default:
      return state;
  }
}
