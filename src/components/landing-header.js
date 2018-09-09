import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingHeader extends Component{
  constructor(props){
    super(props);
    this.state = { page: 'home'}
  }
  render(){
    return(
      <div className="fixed-top">
        <nav id="landing-header" className="navbar navbar-dark navbar-expand-md justify-content-end">
              <Link className="navbar-brand" to="#">LOGO</Link>
                  <div className="help-center ml-auto">
                    <Link to="#" className="expanded" aria-label="Help center">
                        <i className="fa fa-comment"></i>
                        <i className="fa fa-question-circle"></i>
                      </Link>
                    </div>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContentLanding" aria-controls="navbarSupportedContentLanding" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContentLanding">
            <div className="navbar-nav">
                  <div className="nav-item d-flex justify-content-center" aria-label="Home">
                    <Link className="landing-menu-item landing-active" to="/">Home
                      <span className="sr-only">(current)</span>
                    </Link>
                  </div>
                  <div className="nav-item d-flex justify-content-center" aria-label="Products">
                    <Link className="landing-menu-item" to="#">
                      Products
                    </Link>
                  </div>
                  <div className="nav-item d-flex justify-content-center" aria-label="Mortgage">
                    <Link className="landing-menu-item" to="#">
                      Mortgage
                    </Link>
                  </div>
                  <div className="nav-item d-flex justify-content-center" aria-label="Contacts">
                    <Link className="landing-menu-item" to="#">
                      Contacts
                    </Link>
                  </div>
            </div>
          </div>
        </nav>
        <form id="landing-search" className="form-inline search-bar">
          <div className="d-flex justify-content-center">
            <input className="form-control" type="search"
              placeholder="search in the website" aria-label="Search in the website" />
              <button className="btn orange-bg" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
      </div>
    );
  }

  onPageClick(page, event){
    this.setState({page});
  }
}

export default LandingHeader;
