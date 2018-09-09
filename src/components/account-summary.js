import React, { Component } from 'react';
import Pie from './pie-chart';


class AccountSummary extends Component {
  render(){
    return (
      <div className="summary">
        <div className="row">
          <div className="col-md-2 col-2 nav-link">
            <button className="btn">
              <i className="fas fa-eye-slash"></i>
            </button>
          </div>
          <div className="col-md-8 col-10">
            <div className="row">
              <div className="col-md-7 col-12 account txt-blue">
                <span className="col-md-4 col-4">Account: </span>
                <span className="col-md-8 col-8" aria-label="account number">3333/999999999</span>
              </div>
              <div className="col-md-5 col-12 earnings" aria-label="total account income for the month">
                <i className="fas fa-plus"></i>&nbsp;3333.00
                <i className="fas fa-euro-sign"></i>
              </div>
            </div>
            <div className="row auto-order">
              <div className="col-md-7 col-12 B balance txt-blue">
                <span className="col-md-4 col-4">Balance: </span>
                <span className="col-md-8 col-8" aria-label="balance">9999.99
                  <i className="fas fa-euro-sign"></i>
                </span>
              </div>
              <div className="col-md-5 col-12 A spendings" aria-label="total spendings for the month">
                <i className="fas fa-minus"></i>&nbsp;2233.00
                <i className="fas fa-euro-sign"></i>
              </div>
              <div className="col-md-12 C txt-center iban">
                <span>IBAN:</span> <span>IT100005555888888999999999</span>&nbsp;
                <i className="fas fa-share-square"></i>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 pie-chart">
            <Pie />
          </div>
        </div>
      </div>
    );
  }
}

export default AccountSummary;
