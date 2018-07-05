import React, { Component } from 'react';
import '../styles/Bg.scss';

class Bg extends Component {
    render() {
        return (
            <div className="bg-section">
                <div className="bg-subsection bg-subsection-2"></div>
                <div className="bg-subsection bg-subsection-5"></div>
                <div className="bg-subsection bg-subsection-3"></div>
                <div className="bg-subsection bg-subsection-1 "></div>
                <div className="bg-subsection bg-subsection-4"></div>
            </div>
        );
    }
}

export default Bg;