import React from 'react';
import logo from '../static/Unmapped-1.png'

const NavBarForms = () => (
    <div class="nav_section">
        <a href='/'>
            <img
                src={logo}
                alt='unmapped.io'
                style={{
                    marginLeft: '40px'
                }}
                width={206}
            /> </a>
    </div>
);


export default NavBarForms;

