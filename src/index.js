import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BankIndex from './components'
import BankHome from './components/bank_home';
import BankTransfer from './components/bank_transfer';
import BankPayments from './components/bank_payments';
import reducers from './reducers';

const store= createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="w-100">
        <Switch>
          <Route path="/home" component={BankHome} />
          <Route path="/transfer/new" component={BankTransfer} />
          <Route path="/payments/new" component={BankPayments} />
          <Route path="/" component={BankIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#container'));
