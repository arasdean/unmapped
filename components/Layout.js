import NavBar from './NavBar';
import styled from 'styled-components'; 
import Meta from './Meta';
import NavBarForms from './NavBarForms';

const Layout = (props) => (
    <Container> 
        <Meta />
        {props.type && props.type === 'form' ? <NavBarForms /> : <NavBar />}
        {props.children}
    </Container> 
)

const Container = styled.div``;


export default Layout;