import {
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILED,
} from '../actions/projectActions.js';

export default function projects(state = [], action) {
  switch(action.type) {
    case FETCH_PROJECTS_SUCCESS:    
    return [...action.payload, ...state];    
    
    case FETCH_PROJECTS_FAILED:
    console.log(action.payload);
    return state;    

    default:
    return state;
  }
};