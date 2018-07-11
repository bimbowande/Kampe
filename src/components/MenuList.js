import React from 'react'
import Navlink from './Navlink';

const MenuList = ({className}) => {
  return (
    <div className={className}>
        <Navlink href="home.html" linkName="Clubs"/>
        <Navlink href="sponsors.html" linkName="Agents"/>
        <Navlink href="sponsors.html" linkName="Players"/>
    </div>
  )
}
export default MenuList