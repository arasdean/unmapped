import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components'; 
// import Meta from './Meta';
import NavBarForms from './NavBarForms';
import CopyrightFoot from './CopyrightFoot';

const Layout = (props) => (
    <Container> 
        {props.type && props.type === 'form' ? <NavBarForms /> : <NavBar />}
        {props.children}
        {/* <CopyrightFoot /> */}
    </Container> 
)

const Container = styled.div``;


export default Layout;