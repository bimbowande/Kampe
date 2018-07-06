import React from 'react'
import Button from './Button';

const Authorize =  ({className}) => {
  return (
      <div className={className}>
        <Button name="Login" className="btn-login" />
        <Button name="Get Started" className="btn-signup"/>
    </div>
  )
}
export default Authorize;