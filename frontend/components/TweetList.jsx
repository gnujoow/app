import React from 'react';
import { connect } from 'react-redux';
import { fetchTweets } from '../actions/index';

import Tweet from './Tweet';

class TweetList extends React.Component {
  componentWillMount() {
    this.props.fetchTweets();
  }

  render() {
    const { tweets } = this.props;
    if(!tweets){
      return <div>로오딩중우우웅...</div>
    }
    let tweet = tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />)
    console.log(tweet);
    return(
      <div>
        <ul className="collection">
          {tweet}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { tweets: state.tweets.all };
}

export default connect(mapStateToProps, { fetchTweets })(TweetList);
