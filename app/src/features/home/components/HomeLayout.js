import React, { Component } from 'react';
import Header from './Header/Header';
import RoomCreatorView from './RoomCreator/RoomCreatorView';
import './HomeLayout.css';

export default class HomeLayout extends Component {
  render() {
    return (
      <div className="home">
        <div className="headline-section">
          <Header/>
          <RoomCreatorView/>
        </div>
      </div>
    );
  }
}
