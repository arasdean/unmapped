import React from 'react';
import logo from '../static/Unmapped-1.png'
import '../styles/main.scss'

const NavBar = () => (
    <div className="nav_section">
        <div className="nav_row">
            <div className="desktop">  <a href='/'> <img src={logo} width="206" alt="" /> </a></div>
            <nav class="mobile-menu">
            <div className="column logo">  <a href='/'> <img src={logo} width="206" alt="" /> </a></div>
            <label for="show-menu" class="show-menu">
                <div class='hamburger_icon'> 
                    <div class="lines" />
                    <div class="lines" />
                    <div class="lines" />
                </div> 
                </label>
                    <input type="checkbox" id="show-menu" />
                    <ul id="menu">
                        <li><a href="#how">How It Works</a></li>
                        <li><a href="#experience">Experiences</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
            </nav>
                <div className="nav_column">
                    <a href='#how'> <h4> How It Works </h4></a>
                    <a href='#experience'> <h4> Experience </h4></a>
                    <a href="mailto: hello@unmapped.io" className="nav_link w-inline-block">
                        <h4>Contact</h4>
                    </a>
                </div>
        </div>
        </div>
        );
        
        
        export default NavBar;
        
