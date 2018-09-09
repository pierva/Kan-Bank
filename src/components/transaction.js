import React, { Component } from 'react';

export default ({transaction}) => {
  if(!transaction){ return null }
    const amountColor = transaction.amount > 0 ? "txt-green": null;
    const amountClass = `col-4 amount ${amountColor} text-nowrap`;
      return (
        <div>
          <div className="transaction row">
            <div className="col-10">
              <div className="row">
                <div className="col-2 trans-day" aria-label="day">{transaction.day}</div>
                <div className="col-6 text-truncate text-nowrap" aria-label="description">
                  {transaction.description}
                </div>
                <div className={amountClass} aria-label="amount">
                  {transaction.amount.toFixed(2)}
                </div>
              </div>
              <div className="row details">
                <div className="col-2 txt-center" aria-label="month">{transaction.month}</div>
                <div className="col-6" aria-label="transaction type">TYPE: {transaction.type}</div>
                <div className="col-4 txt-right" aria-label="balance after transaction">{transaction.balance}</div>
              </div>
            </div>
            <div className="col-2 form-inline additional">
              <button className='btn'>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
          </div>
          <hr className="style-two" />
      </div>
    );
}
