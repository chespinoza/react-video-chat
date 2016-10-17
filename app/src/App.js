import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import HomeView from './features/home/components/HomeView';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={HomeView}/>
      </Router>
    );
  }
}

export default App;
