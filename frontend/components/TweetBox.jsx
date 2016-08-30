import React from 'react';
import { TextField } from 'material-ui';
import { RaisedButton } from 'material-ui';

import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {
  style: {
    margin: 12,
  },
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};

export default class TweetBox extends React.Component {
  render() {
    return (
      <div>
        <TextField
          fullWidth={true}
          floatingLabelText="어떤 생각하고 있어요?"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        <RaisedButton label="공유하기" style={styles.style}/>
      </div>
    )
  }
}
