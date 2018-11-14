import React from 'react';
import NavBar from './NavBar';
import SearchBox from './SearchBox'; 
import '../styles/hero.scss';

const HeroSection = (props) => (
    <div class="hero_section">
        <NavBar /> 
        <div class="hero_container">
            <div class="hero_box">
                <h1 class="heading">A friend in every city.</h1>
                <SearchBox />
            </div>
        </div>
    </div>
)



export default HeroSection; 