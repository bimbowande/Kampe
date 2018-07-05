import React, { Component } from 'react';
import '../styles/Bg.scss';

class Bg extends Component {
    render() {
        return (
            <div className="bg-section">
                <div className="bg-subsection bg-subsection1">1</div>
                <div className="bg-subsection bg-subsection2">2</div>
                <div className="bg-subsection bg-subsection3">3</div>
                <div className="bg-subsection bg-subsection4 ">4</div>
                <div className="bg-subsection bg-subsection5">5</div>
            </div>
        );
    }
}

export default Bg;