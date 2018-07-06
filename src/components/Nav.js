import React, { Component } from 'react'
import BrandName from './BrandName';
import MenuList from './MenuList';
import Authorize from './Authorize';

import '../styles/nav.scss';

export default class Nav extends Component {
  constructor(props){
        super(props);
        this.state  = {
            
        }
    }
 render() {
    return (
      <div className="navbar">
        <BrandName name="Kampe"/>
        <MenuList className="menu" />
        <Authorize className="authorize"/>
      </div>
    )
  }
}

