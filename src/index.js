import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './containers/Router.js'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './reducers/index.js'

const renderTarget = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,  renderTarget);
registerServiceWorker();
