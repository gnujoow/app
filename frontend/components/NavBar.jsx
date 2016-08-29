import React from 'react';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Logo</Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/follow">팔로우</Link></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><Link to="/follow">팔로우</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
