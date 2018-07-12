import React, { Component } from 'react'
import BrandName from './BrandName';
import MenuList from './MenuList';
import Authorize from './Authorize';

import '../styles/nav.scss';

export default class Nav extends Component {
  constructor(props){
        super(props);
        this.state  = {
            animate:false,
            brandname:'brandname',
            menu:'menu',
            authorize:'authorize'
        }
    }

    componentDidMount(){ 
       for(let i= 5;i>=0; i--){
          setTimeout(()=>{
            this.setState({ animate: true }, () => {
              console.log(this.state)
              console.log(i)
            });
          },i * 1000)
    }
        
  }
 render() {
    const style = {
      opacity: this.state.animate ? 1:0
    }
    return (
      
      <div className="navbar">
        <BrandName elemstyle = {style}  name="Kampe" className={this.state.brandname}/>
        <MenuList className={this.state.menu} />
        <Authorize className={this.state.authorize}/>
      </div>
    )
  }
}

