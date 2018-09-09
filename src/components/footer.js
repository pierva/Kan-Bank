import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component{

  render(){
    return(
      <footer className="fixed-bottom">
        <div className="bank-footer row form-inline">
          <Link to="#" className="col-md-4 nav-link" aria-label="Card emergency">
            <i className="fas fa-credit-card"></i>CARD EMERGENCY</Link>
          <div className="col-md-4 nav-link footer-bank-name">
            <h3 aria-label="bank name">Kan Bank</h3>
          </div>
          <div className="col-md-4 nav-link" aria-label="Contact number">
            <i className="fas fa-phone"></i>+1 777 888 8888</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
