import React from 'react';
import { PropTypes } from 'react';
import { createPost } from '../actions/index';

export default class TweetBox extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="input-field">
          <label>what you reckon?</label>
          <textarea className="materialize-textarea" />
          <button className="btn right" type="submit">submit</button>
        </div>
      </div>
    )
  }
}
