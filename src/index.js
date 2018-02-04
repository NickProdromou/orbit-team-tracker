import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './containers/Router.js'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { fetchInitialTeams } from './actions/teamActions.js';
import { fetchInitialEmployees } from './actions/employeeActions.js';
import { fetchInitialProjects } from './actions/projectActions.js';
import store from './reducers/index.js'
import { injectGlobal } from 'styled-components';
import globals from './styles/globals.js'

injectGlobal`${globals}`;

store.dispatch(fetchInitialTeams());
store.dispatch(fetchInitialEmployees());
store.dispatch(fetchInitialProjects());

const renderTarget = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,  renderTarget);
registerServiceWorker();
