import React, { Component } from 'react';
import Nav from './Nav';
import '../styles/Bg.scss';

class Bg extends Component {
    render() {
        return (
            <div className="container">
                <div className="bg-section">
                    <div className="bg-subsection bg-subsection-1"></div>
                    <div className="bg-subsection bg-subsection-1"></div>
                    <div className="bg-subsection bg-subsection-2"></div>
                    <div className="bg-subsection bg-subsection-4 "></div>
                    <div className="bg-subsection bg-subsection-1"></div>
                </div>
                <div className="content">
                    <Nav/>
                </div>
            </div>
        );
    }
}

export default Bg;