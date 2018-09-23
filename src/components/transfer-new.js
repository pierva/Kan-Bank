import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class TransferNew extends Component {

  renderField(field){
    const { meta: { touched, error } } = field; //destructoring > same as field.meta.touched and field.meta.error
    const validationClass = `form-control ${touched && error ? 'invalid-input' : ''}`;
    return (
      <div className={field.parentClass}>
        <label htmlFor={field.input.name}>{field.label}</label>
        <input
          placeholder={field.placeholder}
          className={validationClass}
          type="text"
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
           Transfer to: ${values.to}
           Transfer recipient: ${values.name}
           Transfer amount: ${values.amount}
           Transfer description: ${values.description}`);
  }

  handleClick(event){
    event.preventDefault();
    alert("Select from the address book");
  }

  render(){
    const { handleSubmit } = this.props;
    console.log(this.props);

    return (
      <div>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="container transfer-form">
        <div className="row">
          <Field
            parentClass="form-group col-10 pr-0"
            label="To:"
            name="to"
            placeholder="Inser IBAN/Account nr. or select from the address book"
            component={this.renderField}
          />
          <div className="form-group col-2 pl-0">
            <button className="form-control address-btn" onClick={this.handleClick}>
              <i className="fas fa-address-book"></i>
            </button>
          </div>
        </div>
        <div className="row form-group">
          <Field
            parentClass="col-sm-8 col-12"
            label="Name:"
            name="name"
            placeholder="Transfer money to"
            component={this.renderField}
          />
          <Field
            parentClass="col-sm-4 col-12"
            label="Amount:"
            name="amount"
            placeholder="0,00 €"
            component={this.renderField}
          />
        </div>
        <Field
          label="Description (optional):"
          name="description"
          placeholder="What's this transfer for?"
          component={this.renderField}
        />
        <div className="mt-3">
          <Link to="/home" className="btn btn-secondary btn-sm col-md-3 col-6">CANCEL</Link>
          <button type="submit" id="transfer-submit" className="btn btn-primary btn-sm offset-md-6 col-md-3 col-6" disabled>
            CONTINUE
          </button>
        </div>
      </form>
    </div>
  );
  }
}

function validate(values){
  const errors = {};
  const submitBtn = $("#transfer-submit") === undefined ? null :
    $("#transfer-submit");
  if(!values.to){
    errors.to = "Please enter a valid IBAN/Account number";
  } else {
    $("input[name='to']").addClass("valid-input");
  }
  if(!values.name){
    errors.name = "Please enter the full name of the recipient";
  } else {
    $("input[name='name']").addClass("valid-input");
  }
  if(!values.amount){
    errors.amount = "Please enter the amount for this transfer";
  }
  if(values.amount){
    if(parseInt(this) <= 0){
      errors.amount = "Please enter an amount greater than zero";
    } else{
      $("input[name='amount']").addClass("valid-input");
    }
  }
  if(!_.isEmpty(errors)){
    if(submitBtn){
      submitBtn.prop("disabled", true);
    }
  } else {
    submitBtn.prop("disabled", false);
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'TransferNewForm'
})(TransferNew);
