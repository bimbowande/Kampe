import React from 'react';
import TextInput from './TextInput';
import BrandName from './BrandName';
 const Form = ({className}) => {
  return (
    <div className={className}>
      <BrandName name="Kampe" className="form-brandname"/>
      <TextInput className='input-group'/>
      <TextInput className='input-group'/>
    </div>
  )
}

export default Form;