import React, { PropTypes } from 'react';
import NavBar from '../components/NavBar';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class App extends React.Component {
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};
