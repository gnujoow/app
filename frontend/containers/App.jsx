import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        navbar
        <hr />
        {this.props.children}
      </div>
    )
  }
}
