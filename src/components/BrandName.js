import React, { Component } from 'react'

const BrandName = ({href,name,className}) =>{
    return(
        <div className={className}>
            <a href={href}>{name}</a>
        </div>
    )
}
export default BrandName;