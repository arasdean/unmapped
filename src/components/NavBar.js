import React from 'react';
import logo from '../static/Unmapped-1.png'
import '../styles/main.scss'

const NavBar = () => (
    <div className="nav_section">
        <div className="nav_row">
            <div className="column logo"> <img src={logo} width="206" alt="" /> </div>
            <div className="column">  <a href="#" className="nav_link w-inline-block">
                <h4>How it works</h4>
            </a>
                <a href="#" className="nav_link w-inline-block">
                    <h4>What&#x27;s included</h4>
                </a>
            </div>
            <div className="column"> <a href="#" className="nav_link w-inline-block">
                <h4>FAQs</h4>
            </a>
                <a href="#" className="nav_link w-inline-block">
                    <h4>Contact</h4>
                </a>
                <a href="#" className="nav_link w-inline-block">
                    <h4>My Tours</h4>
                </a> </div>
        </div>
    </div>
);


export default NavBar;

