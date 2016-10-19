import React, { Component } from 'react';
import Header from '../../../home/components/Header/Header';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className="aboutPage">
        <Header></Header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>About us</h1>
              <p className="team-description">
                WeTalk is a team of three people from Vietnam, Russia and Chile.
                We share similar interest with software development and create product that people love and use everyday.
              </p>
            </div>
          </div>
          <div className="row members">
            <div className="member-item">
              <div className="col-md-3">
                <img className="img-responsive img-circle img-border" role="presentation" src="/images/mikhail.jpg" alt="Mikhail Kotykhov"/>
              </div>
              <div className="col-md-8">
                <h3>Mikhail Kotykhov</h3>
                <strong className="role">Project Manager</strong>
                <p className="description">
                Commodo proident occaecat elit tempor aute deserunt eu incididunt enim aute. Minim dolor amet fugiat tempor in tempor cupidatat magna magna veniam minim magna. Est sunt esse cillum proident adipisicing anim excepteur cupidatat elit consectetur ea deserunt. Deserunt eiusmod adipisicing qui deserunt occaecat qui excepteur et nostrud nostrud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}