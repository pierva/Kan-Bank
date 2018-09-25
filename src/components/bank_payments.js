import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom'
import AccountSelect from './account-select';
import PaymentNew from './payment-new';

class BankPayments extends Component{
  render(){
    return(
      <div className="container">
        <Header />
        <div className="transfer-content">
          <h3 className="header" aria-label="make a payment header">MAKE A PAYMENT</h3>
          <AccountSelect/>
        </div>
        <hr className="style-two"/>
        <button className="btn btn-primary btn-sm col-sm-6 col-12 offset-sm-3">Add a Company or Person</button>
        <hr className="style-two"/>
        <PaymentNew />
        <Footer />
      </div>
    );
  }
}


export default BankPayments;
