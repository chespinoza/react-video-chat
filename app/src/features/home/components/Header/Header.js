import React, { Component } from 'react';
import { Link } from 'react-router';
import './Header.css';

export default class Header extends Component {

  render() {
    let headerClassName = 'header navbar navbar-default';
    if (this.props.whiteNavbar === true) {
      headerClassName += ' white';
    }
    return (
      <nav className={headerClassName}>
        <div className="container">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">WeTalk</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Header.defaultsProps = {
  whiteNavbar: false
}