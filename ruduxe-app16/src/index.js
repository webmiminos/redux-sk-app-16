import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import chat from './reducers';

const initialState = localStorage.comments ? JSON.parse(localStorage.comments) : [];

const store = createStore(chat, initialState);

ReactDOM.render(
  <Provider store={store}> <App /> </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
