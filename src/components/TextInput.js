import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TextInput = ({className,iconclass,type,inputclass,placeholder,iconname}) => {
  return (
    <div className={className}>
      <i><FontAwesomeIcon icon={iconname} size="1x"/></i>
      <input type={type} className={inputclass} placeholder={placeholder} />
    </div>
  )
}

export default TextInput;
