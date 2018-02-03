import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import teams from './teamReducer.js';
import projects from './projectsReducer.js';
import employees from './employeeReducer.js';


export default createStore(combineReducers(
  {
    teams,
    projects,
    employees
  }),
  applyMiddleware(thunk)
)