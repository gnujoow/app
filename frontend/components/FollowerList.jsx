import React from 'react';
import { connect } from 'react-redux';
import { fetchFollowers } from '../actions/index';

import Follower from './Follower';

class FollowerList extends React.Component {
  componentWillMount() {
    this.props.fetchFollowers();
  }

  render() {
    const { followers } = this.props;
    if(!followers){ return <div>로오딩중우우웅...</div> }
    let follower = followers.map(follower => <Follower key={follower.id} {...follower} />)
    return(
      <div className="row">
        {follower}
     </div>
    )
  }
}

function mapStateToProps(state){
  return { followers: state.followers.all };
}

export default connect(mapStateToProps, { fetchFollowers })(FollowerList);
