import React from 'react';

import Tweet from '../components/Tweet';
import TweetBox from '../components/TweetBox';
import TweetList from '../components/TweetList';

export default class TweetIndex extends React.Component {
  render() {
    return (
      <div className="container">
        <TweetBox />
        <TweetList />
      </div>
    )
  }
}
