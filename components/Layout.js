import NavBar from './NavBar';
import styled from 'styled-components'; 
import Meta from './Meta';

const Layout = (props) => (
    <Container> 
        <Meta />
        <NavBar /> 
        {props.children}
    </Container> 
)

const Container = styled.div``;


export default Layout;