import React from 'react';
import ReactDOM from 'react-dom';
import App from './start_component/App.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, [], applyMiddleware(logger));

ReactDOM.render(
   <Provider store={store}>
     <App/>
   </Provider>,
   document.getElementById('root')
)