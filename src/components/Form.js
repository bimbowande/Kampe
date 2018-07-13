import React from 'react';
import TextInput from './TextInput';
import BrandName from './BrandName';
 const Form = ({className}) => {
  return (
    <div className={className}>
      <BrandName name="Kampe" className="form-brandname"/>
      <TextInput className='input-group' inputclass='input-box' iconname='user' placeholder='Username or email'/>
      <TextInput type='password' className='input-group' inputclass='input-box' iconname='key' placeholder='Password'/>
    </div>
  )
}

export default Form;