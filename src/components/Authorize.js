import React from 'react'
import Button from './Button';

const Authorize =  ({className}) => {
  return (
      <div className={className}>
        <Button name="Login" className="btn btn-login" />
        <Button name="Get Started" className="btn btn-signup"/>
    </div>
  )
}
export default Authorize;