import React from 'react';
import TextInput from './TextInput';

 const Form = ({className}) => {
  return (
    <div className={className}>
      <TextInput/>
      <TextInput/>
    </div>
  )
}

export default Form