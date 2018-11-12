import Link from 'next/link';
import '../styles/main.scss'

const NavBar = () => (
    <div>
        <ul>
            <li><Link href='/'><a>Home</a></Link> </li>
            <li><Link href='/about'><a>About</a></Link> </li>
        </ul> 
    </div>
);

export default NavBar; 