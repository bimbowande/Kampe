import React from 'react'

const Button = ({className,name,iconname}) => {
  return (
    <button className={className}>{name}<i className={iconname}></i></button>
  )
}
export default Button;
