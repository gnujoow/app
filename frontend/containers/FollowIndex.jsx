import React from 'react';
import FollowerList from '../components/FollowerList';

export default class FollowIndex extends React.Component {
  render() {
    return (
      <div>
      <h1>멋진 사자들을 만나봐요</h1>
        <FollowerList />
      </div>
    )
  }
}
