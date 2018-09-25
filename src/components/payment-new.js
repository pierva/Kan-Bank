import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PaymentNew extends Component {

  renderField(field){
    const { meta: { touched, error } } = field; //destructoring > same as field.meta.touched and field.meta.error
    const validationClass = `form-control ${touched && error ? 'invalid-input' : ''}`;
    return (
      <div className={field.parentClass}>
        <label htmlFor={field.input.name}>{field.label}</label>
        <input
          placeholder={field.placeholder}
          className={validationClass}
          type={field.type}
          {...field.input}
        />
        <div className="invalid-text">
          {touched ? error: ''}
        </div>
      </div>
    );
  }

  onSubmit(values){
    alert(`At this point it is necessary to process the data. \n
           Payment to: ${values.paymentTo || ''}, ${values.paymentTo1 || ''}
           Payment date: ${values.date || ''}, ${values.date1 || ''}
           Payment amount: ${values.amount || ''}, ${values.amount1 || ''}`
        );
  }

  handleClick(event){
    event.preventDefault();
    alert("Select from the address book");
  }

  render(){
    const { handleSubmit } = this.props;

    return (
      <div>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="container payment-form">
        <div className="row">
          <Field
            parentClass="form-group col-10 pr-0"
            label="To:"
            name="paymentTo"
            placeholder="Insert a compnay/person or select one"
            type="text"
            component={this.renderField}
          />
          <div className="form-group col-2 pl-0">
            <button className="form-control address-btn" onClick={this.handleClick}>
              <i className="fas fa-address-book"></i>
            </button>
          </div>
        </div>
        <div className="row">
            <Field
              parentClass="col-sm-5 col-12"
              label="Deliver by:"
              name="date"
              placeholder="mm/dd/yyyy"
              type="date"
              component={this.renderField}
            />
          <div className="clearfix"></div>
          <Field
            parentClass="col-sm-5 offset-sm-2 col-12"
            label="Amount:"
            name="amount"
            placeholder="0,00 €"
            type="text"
            component={this.renderField}
          />
        </div>
        <hr className="style-two"/>
        <div className="row">
          <Field
            parentClass="form-group col-10 pr-0"
            label="To:"
            name="paymentTo1"
            placeholder="Insert a compnay/person or select one"
            type="text"
            component={this.renderField}
          />
          <div className="form-group col-2 pl-0">
            <button className="form-control address-btn" onClick={this.handleClick}>
              <i className="fas fa-address-book"></i>
            </button>
          </div>
        </div>
        <div className="row">
            <Field
              parentClass="col-sm-5 col-12"
              label="Deliver by:"
              name="date1"
              placeholder="mm/dd/yyyy"
              type="date"
              component={this.renderField}
            />
          <div className="clearfix"></div>
          <Field
            parentClass="col-sm-5 offset-sm-2 col-12"
            label="Amount:"
            name="amount1"
            placeholder="0,00 €"
            type="text"
            component={this.renderField}
          />
        </div>
        <div className="mt-3">
          <Link to="/home" className="btn btn-secondary btn-sm col-md-3 col-6">CANCEL</Link>
          <button type="submit" id="payment-submit" className="btn btn-primary btn-sm offset-md-6 col-md-3 col-6" disabled>
            MAKE PAYMENT
          </button>
        </div>
      </form>
    </div>
  );
  }
}

function validate(values){
  let errors = {};
  const submitBtn = $("#payment-submit") === undefined ? null :
    $("#payment-submit");
  if(!values.paymentTo){
    errors.paymentTo = "Please enter the recipient for this payment";
  } else {
    $("input[name='paymentTo']").addClass("valid-input");
  }
  if(!values.date){
    errors.date = "Please select a date for this payment";
  } else {
    $("input[name='date']").addClass("valid-input");
  }
  if(!values.amount){
    errors.amount = "Please enter the amount for this payment";
  }
  if(values.amount){
    if(parseInt(this) <= 0){
      errors.amount = "Please enter an amount greater than zero";
    } else{
      $("input[name='amount']").addClass("valid-input");
    }
  }
  if(!values.paymentTo1){
    errors.paymentTo1 = "Please enter the recipient for this payment";
  } else {
    $("input[name='paymentTo1']").addClass("valid-input");
  }
  if(!values.date1){
    errors.date1 = "Please select a date for this payment";
  } else {
    $("input[name='date1']").addClass("valid-input");
  }
  if(!values.amount1){
    errors.amount1 = "Please enter the amount for this payment";
  }
  if(values.amount1){
    if(parseInt(this) <= 0){
      errors.amount1 = "Please enter an amount greater than zero";
    } else{
      $("input[name='amount1']").addClass("valid-input");
    }
  }
  if(_.isEmpty(errors)){
    if(submitBtn){
      submitBtn.prop("disabled", false);
    }
  } else if (!errors.paymentTo && !errors.date && !errors.amount ||
          !errors.paymentTo1 && !errors.date1 && !errors.amount1) {
    if(submitBtn){
      submitBtn.prop("disabled", false);
      errors = {};
    }
  }
  else {
    submitBtn.prop("disabled", true);
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'PaymentNewForm'
})(PaymentNew);
