import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tabs extends Component{

  render(){
    return(
      <div className="container" id="tabs">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <i className="fas fa-university"></i>
              <span>Account</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link blue-text" href="#">
              <i className="fas fa-credit-card"></i>
              <span>Cards</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link blue-text" href="#">
              <i className="fas fa-bell"></i>
              <span>Reminders</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link blue-text" href="#">
              <i className="fas fa-file"></i>
              <span>Documents</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link blue-text" href="#">
              <i className="fas fa-envelope"></i>
              <span>Notifications</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Tabs;
