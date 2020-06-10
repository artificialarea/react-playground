import React, { Component } from 'react';
import ValidationError from './ValidationError';
import './RegistrationFormApp.css';

export default class RegistrationFormApp extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: '',
        touched: false,
      },
      password: {
        value: '',
        touched: false,
      },
      repeatPassword: {
        value: '',
        touched: false,
      }
    } 
  }

  // updateName(name) {
  //   this.setState({ name: { value: name, touched: true } });
  // }
  // updatePassword(password) {
  //   this.setState({ password: { value: password, touched: true } });
  // }
  // updateRepeatPassword(repeatPassword) {
  //   this.setState({ repeatPassword: { value: repeatPassword, touched: true } });
  // }
  // ^^^^^^^^^^^ replace all these with just this
  updateInput(event) {
    this.setState({
      [event.target.name]: { value: event.target.value, touched: true }
    })
  }



  handleSubmit = (event) => {
    event.preventDefault();
    const { name, password, repeatPassword } = this.state;

    console.log('Name: ', name.value);
    console.log('Password: ', password.value);
    console.log('Repeat Password: ', repeatPassword.value);

    // potentially submit these values to the server here

  }

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return 'Name is required';
    } else if (name.length < 2) {
      return 'Name must be at least 2 characters long';
    }
  }

  validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length === 0) {
      return 'Password is required';
    } else if (password.length < 6 || password.length > 72) {
      return 'Password must be between 6 and 72 characters long';
    } else if (!password.match(/[0-9]/)) {  // note: regular expressions (regex)
      return 'Password must contain at least one number';
    }
  }

  validateRepeatPassword() {
    const repeatPassword = this.state.repeatPassword.value.trim();
    const password = this.state.password.value.trim();

    if (repeatPassword !== password) {
      return 'Passwords do not match';
    }
  }

  render() {
    const { name, password, repeatPassword } = this.state;
    console.log(name, password, repeatPassword);

    // Re: 'onBlur' Event Listeners
    // replacing the typical 'onChange' with 'onBlur'
    // so the Validation of a particular <input> form occurs only once it loses focus (aka blur)
    return (
      <form className="registration" onSubmit={this.handleSubmit}>
        <h2>Register</h2>
        <div className="registration__hint">* required field</div>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input type="text" className="registration__control"
              name="name" id="name" 
              onBlur={event => this.updateInput(event)} />
          {this.state.name.touched && (
            <ValidationError message={this.validateName()} />
          )}  
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input type="password" className="registration__control"
              name="password" id="password" 
              onBlur={event => this.updateInput(event)}  />
          {this.state.password.touched && (
            <ValidationError message={this.validatePassword()} />
          )}
          <div className="registration__hint">6 to 72 characters, must include a number</div>
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat Password *</label>
          <input type="password" className="registration__control"
              name="repeatPassword" id="repeatPassword" 
              onBlur={event => this.updateInput(event)}/>
          {this.state.repeatPassword.touched && (
            <ValidationError message={this.validateRepeatPassword()} />
          )}
        </div>

        <div className="registration__button__group">
          <button type="reset" className="registration__button">
              Cancel
          </button>
          <button 
            type="submit" 
            className="registration__button"
            disabled={
              this.validateName() ||
              this.validatePassword() ||
              this.validateRepeatPassword() 
            }
          >
              Save
          </button>
        </div>
      </form>
    )
  }
}



