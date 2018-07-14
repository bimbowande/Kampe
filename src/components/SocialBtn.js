import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 const SocialBtn = ({className,iconName,btnClassName,name}) => {
  return (
    <div className={className}>
      <i className={iconName}></i>
      <button className={btnClassName}>{name}</button>
    </div>
  )
}

export default SocialBtn;
