import React from 'react'

 const SocialBtn = ({iconName,btnname,name}) => {
  return (
    <div>
      <i className={iconName}></i>
      <button className={btnname}>{name}</button>
    </div>
  )
}

export default SocialBtn;
