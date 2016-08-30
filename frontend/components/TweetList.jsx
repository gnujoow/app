import React from 'react';
import { connect } from 'react-redux';
import { fetchTweets } from '../actions/index';

import { List, ListItem, Divider } from 'material-ui';


import Tweet from './Tweet';
import MobileTearSheet from './MobileTearSheet';

class TweetList extends React.Component {
  componentWillMount() {
    this.props.fetchTweets();
  }

  render() {
    const { tweets } = this.props;
    if(!tweets){ return <div>로오딩중우우웅...</div> }
    let tweet = tweets.map(
      tweet =>
      <div key={tweet.id}>
        <Tweet key={tweet.id} {...tweet}/>
        <Divider inset={true} />
      </div>
    );

    return(
      <List>
       { tweet }
      </List>
    )
  }
}

function mapStateToProps(state){
  return { tweets: state.tweets.all };
}

export default connect(mapStateToProps, { fetchTweets })(TweetList);
