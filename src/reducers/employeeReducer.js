import {
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILED,
} from '../actions/employeeActions.js';

export default function employees(state = [], action) {
  switch(action.type) {
    case FETCH_EMPLOYEES_SUCCESS:    
    return [...action.payload, ...state];    
    
    case FETCH_EMPLOYEES_FAILED:
    return state;    

    default:
    return state;
  }
};