import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise'
import injectTapEventPlugin from 'react-tap-event-plugin';

import routes from './routes';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

injectTapEventPlugin();

let documnetReady = () => {
  let reactNode = document.getElementById('app');
  if (reactNode){
    ReactDOM.render(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes} />
      </Provider>,
      reactNode
    )
  }
}

$(documnetReady)
