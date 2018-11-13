import React from 'react';
import styled from 'styled-components'; 
import '../styles/main.scss'; 

const HeroSection = (props) => (
    <Section> 
        <h1>A friend in every city. </h1>
   </Section> 
)

const Section = styled.div`
    width: 100%;
    height: 100%
    text-align: center; 
`

export default HeroSection; 