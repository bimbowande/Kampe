import React, { Component } from 'react';
import Nav from './Nav';
import IntroText from './IntroText';
import Taglinetext from './Taglinetext';
import Button from './Button';
import Login from '../container/Login';
import '../styles/Bg.scss';

class Bg extends Component {
    render() {
        return (
            <div className="container">
                <div className="bg-section">
                    <div className="bg-subsection bg-subsection-2"></div>
                    <div className="bg-subsection bg-subsection-1"></div>
                    <div className="bg-subsection bg-subsection-8 "></div>
                    <div className="bg-subsection bg-subsection-6 "></div>
                    <div className="bg-subsection bg-subsection-3 "></div>
                    <div className="bg-subsection bg-subsection-2"></div>
                    <div className="bg-subsection bg-subsection-1"></div>
                    
                </div>
                <div className="content">
                    <Nav/>
                    <div className ="intro-text">
                        <IntroText text="PLATFORM"/>
                        <IntroText text="CONNECTING YOUNG STARS"/>
                        <IntroText text="WITH LEADING CLUBS"/>
                        <Taglinetext className="tagline-bottom" text="Exclusive Connections between right sponsors"/>
                        <Taglinetext text="and the right Clubs through private auctions"/>
                        <Button name="BECOME AN AGENT" className="sponsor-btn"/>
                    </div>
                </div>
               <Login/>
            </div>
        );
    }
}

export default Bg;