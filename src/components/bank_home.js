import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Tabs from './tabs-nav';
import AccountSummary from './account-summary';
import Transaction from './transaction';
import TransactionList from './transactions-list';

const transactions = {
  1 :{
    transaction: {
      day: 21,
      month: "AUG",
      description: "XX Supermarket MIAMI purchase 888-9999-82983",
      type: "Debit Card",
      amount: -50.00,
      balance: 9999.99
    }
  },
  2 :{
    transaction: {
      day: 20,
      month: "AUG",
      description: "Mistery Company Payment. ID: 2201-0002-4666",
      type: "Direct Deposit",
      amount: 1000.00,
      balance: 10049.99
    }
  },
  3 :{
    transaction: {
      day: 19,
      month: "AUG",
      description: "Investment in Kan Bank stocks",
      type: "Direct Deposit",
      amount: -150.00,
      balance: 9049.99
    }
  },
  4 :{
    transaction: {
      day: 19,
      month: "AUG",
      description: "Grocery store XX purchase. 3450 Nw 87 Ave, Miami",
      type: "Debit Card",
      amount: -32.46,
      balance: 9199.99
    }
  },
  5 :{
    transaction: {
      day: 17,
      month: "AUG",
      description: "WM Supercenter purchase Miami",
      type: "Debit Card",
      amount: -64.37,
      balance: 9232.45
    }
  }
}

class BankHome extends Component{

  render(){
    return(
      <div className="w-100">
        <Header />
        <Tabs />
        <div className="container middle-content">
          <h3 className="header" aria-label="Account details">ACCOUNT DETAILS</h3>
          < AccountSummary />
          <hr className="style-two" />
          <h2 className="header" aria-label="latest transactions">Latest transactions</h2>
          <TransactionList
            transactions={transactions}
          />
        </div>
        < Footer />
      </div>
    );
  }
}


export default BankHome;
