import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import teams from './teamReducer.js';
import projects from './projectsReducer.js';
import employees from './employeeReducer.js';
import ui from './uiReducer.js';

const reducers = combineReducers({
  teams, projects, employees, ui
});

export default createStore(reducers, applyMiddleware(thunk))