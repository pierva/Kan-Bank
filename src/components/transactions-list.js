import React, { Component } from 'react';
import Transaction from './transaction';
import _ from 'lodash';

const TransactionList = (props) =>{
  if(!props.transactions){return}
  const transactionList = _.map(props.transactions, (transaction, index) => {
    return (
      <Transaction
      transaction={transaction.transaction}
      key = {index}
      />
    );
  });

  return transactionList;
}

export default TransactionList;
