import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import TweetIndex from './containers/TweetIndex';

export default(
  <Route path='/' component={App}>
    <IndexRoute component={TweetIndex} />
  </Route>
);
