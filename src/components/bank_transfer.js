import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';
import TransferNew from './transfer-new';


class BankTransfer extends Component{

  render(){
    return(
      <div>
        <Header/>
        <div className="container transfer-content">
          <h3 className="header" aria-label="make a transfer header">MAKE A TRANSFER</h3>
          <div className="transfer-summary">
            <div className="row">
              <div className="col-md-2 col-2 nav-link">
                <button className="btn">
                  <i className="fas fa-eye-slash"></i>
                </button>
              </div>
              <div className="col-md-10 col-10 mt-3">
                <div className="row">
                  <div className="col-md-7 col-12 account txt-blue">
                    <span className="col-3 col-sm-4 p-0">Account: </span>
                    <select className="col-9 col-sm-8 txt-blue" aria-label="select account" aria-controls="selectAccount">
                      <option value="account1">3333/999999999</option>
                      <option value="account2">2155/444555888</option>
                    </select>
                  </div>
                  <div className="col-md-5 col-12 balance txt-blue">
                    <span className="col-4 p-0">Balance: </span>
                    <span className="col-8 p-0" aria-label="balance">9999.99
                      <i className="fas fa-euro-sign pl-1"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="style-two"/>
        <TransferNew />
      <Footer/>
      </div>
    );
  }
}

export default BankTransfer
