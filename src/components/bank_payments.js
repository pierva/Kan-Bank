import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Tabs from './tabs-nav';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class BankPayments extends Component{
  render(){
    return(
      <div className="w-100">
        < Header />
        < Tabs />
        <div className="container middle-content">
          <h3 className="header" aria-hidden="true">MAKE A PAYMENT</h3>
        </div>
        < Footer />
      </div>
    );
  }
}


export default BankPayments;
