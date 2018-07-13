import React from 'react'

const TextInput = ({className,iconclass,type,inputclass,placeholder}) => {
  return (
    <div className={className}>
      <i className={iconclass}></i>
      <input type={type} className={inputclass} placeholder={placeholder} />
    </div>
  )
}

export default TextInput;
