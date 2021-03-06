import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LandingHeader from './landing-header';
import SlideShow from './slide-show.js';
import Footer from './footer';
import Login from './login';
import Content from './landing-middle-content';

class BankIndex extends Component{
  render(){
    return(
      <div className="w-100">
        <LandingHeader />
        <div>
          <SlideShow />
          <Login />
          <Content />
        </div>
        <Footer />
      </div>
    )
  }
}

export default BankIndex;
