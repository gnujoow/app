import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import TweetIndex from './containers/TweetIndex';
import FollowIndex from './containers/FollowIndex';

export default(
  <Route path='/' component={App}>
    <IndexRoute component={TweetIndex} />
    <Route path='follow' component={FollowIndex} />
  </Route>
);
