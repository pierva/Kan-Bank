import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
  constructor(props){
    super(props);
    this.state = { page: 'home'}
  }
  render(){
    return(
      <div id="auto-order" className="fixed-top">
        <nav id="header" className="navbar navbar-dark A">
            <div>
              <a className="navbar-brand" href="#">LOGO</a>
            </div>
            <form className="form-inline search-bar justify-content-center B">
                <input className="form-control" type="search" placeholder="search in the website" aria-label="Search in the website" />
                <button className="btn orange-bg" type="submit">
                  <i className="fa fa-search"></i>
                </button>
            </form>
            <div>
              <div className="float-right">
                <div className="help-center">
                  <Link to="#" className="expanded" aria-label="Help center">
                      <i className="fa fa-comment"></i>
                      <i className="fa fa-question-circle"></i>
                    </Link>
                  </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/" className="btn btn-outline-danger logout" aria-label="Logout"><i className="fas fa-sign-out-alt"></i></Link>
              </div>
            </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav mr-auto">

              <div className="container scroll-y">

                <div className="row">
                  <div className="nav-item active active-blue menu-item col-md-3 col-12" aria-label="Home">
                    <Link className="nav-link" to="/home">
                      <i className="fas fa-home"></i>Home
                      <span className="sr-only">(current)</span>
                    </Link>
                  </div>
                  <div className="nav-item menu-item col-md-3 col-12" aria-label="Investments">
                    <Link className="nav-link" to="#">
                      <i className="fas fa-chart-area"></i>Investments
                    </Link>
                  </div>
                  <div className="nav-item menu-item col-md-3 col-12" aria-label="Appointment">
                    <Link className="nav-link" to="#">
                      <i className="fas fa-calendar-alt"></i>Appointment
                    </Link>
                  </div>
                  <div className="nav-item menu-item col-md-3 col-12">
                    <Link className="nav-link orange-text" to="#">
                      <i className="fas fa-address-book"></i>Address Book
                    </Link>
                  </div>
                </div>

                <div className="row">
                  <div className="nav-item menu-item col-md-3 col-12" aria-label="Transfer">
                    <Link className="nav-link" to="/transfer/new">
                      <i className="fas fa-exchange-alt"></i>Transfer
                    </Link>
                  </div>
                  <div className="nav-item menu-item col-md-3 col-12" aria-label="Investments">
                    <Link className="nav-link" to="/payments/new">
                      <i className="fas fa-money-bill-alt"></i>Bill Pay
                    </Link>
                  </div>
                  <div className="nav-item menu-item col-md-3 col-12" aria-label="Appointment">
                    <a className="nav-link" href="#">
                      <i className="fas fa-cog"></i>Settings
                    </a>
                  </div>
                  <div className="nav-item menu-item col-md-3 col-12">
                    <a className="nav-link orange-text" href="#">
                      <i className="fas fa-user"></i>Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  onPageClick(page, event){
    this.setState({page});
  }
}

export default Header;
