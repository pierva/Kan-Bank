import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';
import TransferNew from './transfer-new';
import AccountSelect from './account-select';


class BankTransfer extends Component{

  render(){
    return(
      <div>
        <Header/>
        <div className="container transfer-content">
          <h3 className="header" aria-label="make a transfer header">MAKE A TRANSFER</h3>
          <AccountSelect />
        </div>
        <hr className="style-two"/>
        <TransferNew />
      <Footer/>
      </div>
    );
  }
}

export default BankTransfer
