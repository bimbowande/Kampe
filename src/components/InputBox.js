import React from 'react';

const InputBox = ({className,type,name,placeholder,iconclass}) => {
  return (
    <div className ={className}>
      <i className={iconclass}></i>
      <input className={className} placeholder={placeholder} />
    </div>
  )
}
export default InputBox;
