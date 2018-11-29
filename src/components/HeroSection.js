import React from 'react';
import SearchBox from './SearchBox'; 
import NavBarForms from './NavBarForms';
import '../styles/_hero.scss';

const HeroSection = (props) => (
    <div className="hero_section">
        <NavBarForms /> 
        <div className="hero_container">
            <div className="hero_box">
                <h1 className="heading">A friend in every city.</h1>
                <SearchBox />
            </div>
        </div>
    </div>
)



export default HeroSection; 