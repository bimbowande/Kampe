import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import '../styles/login.scss';


export default class Login extends Component {
  render() {
    return (
      <div className='login-section-container'>
          <div className='login-section'> 
            <LoginForm className='form-section'/>
            <div className='form-bg'>
              <span><i className='fa fas fa-times'></i></span>
            </div>
          </div>
      </div>
    )
  }
}
