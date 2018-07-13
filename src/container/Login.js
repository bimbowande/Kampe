import React, { Component } from 'react';
import Form from '../components/Form';
import '../styles/login.scss';


export default class Login extends Component {
  render() {
    return (
      <div className='login-section-container'>
          <div className='login-section'> 
            <Form className='form-section'/>
            <div className='form-bg'></div>
          </div>
      </div>
    )
  }
}
