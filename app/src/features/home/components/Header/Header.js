import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-default">
        <div className="container-fluid">

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
              <li><a href="#">Link</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About<span className="caret"></span></a>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">FAQ<span className="caret"></span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}