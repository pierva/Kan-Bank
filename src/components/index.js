import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LandingHeader from './landing-header';
import SlideShow from './slide-show.js';
import Footer from './footer';

class BankIndex extends Component{
  render(){
    return(
      <div className="w-100">
        <LandingHeader />
        <div>
          <SlideShow />
        </div>
        <Footer />
      </div>
    )
  }
}

export default BankIndex;