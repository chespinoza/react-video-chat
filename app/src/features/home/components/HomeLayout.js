import React, { Component } from 'react';
import Header from './Header/Header';
import RoomCreatorView from './RoomCreator/RoomCreatorView';

export default class HomeLayout extends Component {
  render() {
    return (
      <div>
        <Header/>
        <RoomCreatorView/>
      </div>
    );
  }
}
