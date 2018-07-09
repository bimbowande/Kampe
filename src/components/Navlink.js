import React, { Component } from 'react'

const Navlink = ({href,linkName}) =>{
    return(
        <a href={href}>{linkName}</a>
    )
}
export default Navlink;