import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

let documnetReady = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
}

$(documnetReady)
