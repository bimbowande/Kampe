import React, { Component } from 'react'

const BrandName = ({href,name,className,elemstyle}) =>{
    return(
        <div style={elemstyle} className={className}>
            <a href={href}>{name}</a>
        </div>
    )
}
export default BrandName;