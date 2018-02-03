import {
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILED,
} from '../actions/teamActions.js';

export default function teams(state = [], action) {
  switch(action.type) {
    case FETCH_TEAMS_SUCCESS:    
    return [...action.payload, ...state];    
    
    case FETCH_TEAMS_FAILED:
    return state;    

    default:
    return state;
  }
};