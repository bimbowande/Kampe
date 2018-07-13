import React from 'react';
import TextInput from './TextInput';
import BrandName from './BrandName';
import Button from './Button';
import '../styles/verify-user.scss'

 const LoginForm = ({className}) => {
  return (
    <div className={className}>
      <BrandName name="Kampe" className="form-brandname"/>
      <TextInput className='input-group' inputclass='input-box' iconname='user' placeholder='Username or email'/>
      <TextInput type='password' className='input-group' inputclass='input-box' iconname='key' placeholder='Password'/>
      <div className='verify-user'>
       <p>Forgot Password?</p>
        <Button name="LOGIN"/>
      </div>
      <div className='or'>
        <div className='content-1'></div>
        <div className='content-2'>or</div>
        <div className='content-3'></div>
      </div>
      <div className='social-btn'>
        <Button className='google-btn' name="LOGIN WITH GOOGLE"/>
      </div>
    </div>
  )
}

export default LoginForm;