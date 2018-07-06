import React from 'react'
import Navlink from './Navlink';

const MenuList = ({className}) => {
  return (
    <div className={className}>
        <Navlink href="home.html" linkName="Clubs"/>
        <Navlink href="sponsors.html" linkName="Sponsors"/>
    </div>
  )
}
export default MenuList