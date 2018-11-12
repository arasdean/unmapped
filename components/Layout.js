import Link from 'next/link';
import NavBar from './NavBar'; 
import Meta from './Meta';

const Layout = (props) => (
    <div>
        <Meta /> 
        <NavBar /> 
        {props.children}
    </div>
)

export default Layout;