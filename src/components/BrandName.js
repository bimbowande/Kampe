import React, { Component } from 'react'

const BrandName = ({href,name}) =>{
    return(
        <div className="brandname">
            <a href={href}>{name}</a>
        </div>
    )
}
export default BrandName;