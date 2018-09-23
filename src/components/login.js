import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default () =>{
  return(
    <div className="row container-fluid login-form-container">
    <div className="login-form col-sm-12 col-md-6 col-offset-3">
      <h4 className="txt-center"><i className="fas fa-lock"></i>&nbsp;LOGIN INTO YOUR BANK</h4>
        <form className="form-inline col-12">
            <div className="form-group col-lg-5 col-md-6 col-12">
              <label htmlFor="username" className="sr-only">username</label>
              <input className="form-control-sm col-12" type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group col-lg-5 col-md-6 col-12">
              <label htmlFor="password" className="sr-only">password</label>
              <input className="form-control-sm col-12" type="password" name="password" placeholder="password" />
            </div>
            <div className="form-group col-lg-2 col-md-12 col-12">
                <Link className="btn btn-primary btn-sm col-12" to="/home">
                <i className="fas fa-sign-in-alt"></i>&nbsp;LOGIN
              </Link>
            </div>
            <Link className="col-12" to="#">Forgot User Id/Passcode?</Link>
        </form>
    </div>
    <div className="clearfix"></div>
  </div>
  )
}
