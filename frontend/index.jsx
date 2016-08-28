import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

let documnetReady = () => {
  let reactNode = document.getElementById('app');
  if (reactNode){
    ReactDOM.render(
      <App />,
      document.getElementById('app')
    )
  }
}

$(documnetReady)
