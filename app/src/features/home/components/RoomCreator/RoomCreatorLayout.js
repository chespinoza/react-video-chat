import React, { Component } from 'react';
import UrlBarView from '../UrlBar/UrlBarView';
import './RoomCreatorLayout.css';

export default class RoomCreatorLayout extends Component {
  render() {
    return (
      <div className="room-creator">
        <div className="jumbotron">
          <div className="container">
            <h1 className="title">Create a room and invite up to 8 friends</h1>
            <UrlBarView/>
            <h3 className="subtext">
              <p>Video conversations with up to 8 people for free.</p>
              <p>No login required — no installs</p>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
