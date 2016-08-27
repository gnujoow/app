import React from 'react';

export default class Tweet extends React.Component {
  render() {
    return(
      <li className="collection-item avatar">
        <i className="material-icons circle green">insert_chart</i>
        <span className="title">Title</span>
        <p>
          First Line <br />
          Second Line
        </p>
        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
      </li>
    );
  }
}
