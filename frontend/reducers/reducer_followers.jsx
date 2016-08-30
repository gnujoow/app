import { FETCH_FOLLWERS } from '../actions';

const INITIAL_STATE = { all: [], follow: null};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_FOLLWERS:
      return {...state, all: action.payload.data };
    default:
      return state;
  }
}
