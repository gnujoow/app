import React from 'react';

import Tweet from './Tweet';
import TweetBox from './TweetBox';
import TweetList from './TweetList';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <TweetBox />
        <TweetList />
      </div>
    )
  }
}
