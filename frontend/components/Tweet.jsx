import React from 'react';
import { ListItem } from 'material-ui';

export default class Tweet extends React.Component {
  render() {
    return(
      <div>
        <ListItem
          primaryText={this.props.name}
          secondaryText={this.props.body}
        />
      </div>
    );
  }
}
