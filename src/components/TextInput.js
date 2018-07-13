import React from 'react'

const TextInput = ({iconclass,type,inputclass,placeholder}) => {
  return (
    <div>
      <i className={iconclass}></i>
      <input type={type} className={inputclass} placeholder={placeholder} />
    </div>
  )
}

export default TextInput;
