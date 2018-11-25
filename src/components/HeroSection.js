import React from 'react';
import NavBar from './NavBar';
import SearchBox from './SearchBox'; 
import '../styles/_hero.scss';

const HeroSection = (props) => (
    <div className="hero_section">
        <NavBar /> 
        <div className="hero_container">
            <div className="hero_box">
                <h1 className="heading">A friend in every city.</h1>
                <SearchBox />
            </div>
        </div>
    </div>
)



export default HeroSection; 