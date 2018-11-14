import Link from 'next/link';
import styled from 'styled-components';
import '../styles/main.scss'

const NavBar = () => (
    <NavContainer>
        <Logo src='/static/Unmapped-1.png' />
        <Link href='/'><a>Home</a></Link> 
        <Link href='/about'><a>About</a></Link> 
    </NavContainer>
);

const Logo = styled.img`
    height: 60px
`;

const NavContainer = styled.div`
    width: 100%; 
    display: flex; 
`;

export default NavBar; 