import React from 'react';
import ReactDOM from 'react-dom';
import App from './start_component/App.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
//import reducerComposition from './reducerComposition';
import reducer from './start_component/reducers';

const store = createStore(reducer, [], applyMiddleware(logger));

ReactDOM.render(
   <Provider store={store}>
     <App />
   </Provider>,
   document.getElementById('root')
)