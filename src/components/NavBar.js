import React from 'react';
import logo from '../static/Unmapped-1.png'
import '../styles/main.scss'

const NavBar = () => (
    <div className="nav_section">
        <div className="nav_row">
            <div className="column logo">  <a href='/'> <img src={logo} width="206" alt="" /> </a></div>

            <div className="column">
                <a href="mailto: hello@unmapped.io" className="nav_link w-inline-block">
                    <h4>Contact</h4>
                </a>
            </div>
        </div>
    </div>
);


export default NavBar;

