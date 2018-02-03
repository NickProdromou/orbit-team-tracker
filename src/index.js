import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './containers/Router.js'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './reducers/index.js'
import { injectGlobal } from 'styled-components';
import globals from './styles/globals.js'

injectGlobal`${globals}`;

const renderTarget = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,  renderTarget);
registerServiceWorker();
