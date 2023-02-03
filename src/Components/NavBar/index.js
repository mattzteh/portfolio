import './NavBar.css';

import { NavLink } from 'react-router-dom';
import { motion as m } from 'framer-motion';
const NavBar = () => {

    return (
        <>
        <nav className='navbar'>
            <ul>
                <li>

                    <NavLink 
                    exact to="/" 
                    style={{ textDecoration: 'none' }}>
                        Home</NavLink>
                    
                    <NavLink 
                    to="/about" 
                    style={{ textDecoration: 'none' }}>
                        About Me</NavLink>

                    <NavLink 
                    to="projects" 
                    style={{ textDecoration: 'none' }}>
                        Projects</NavLink>

                </li>
            </ul>
        </nav>
        </>
    )
}

export default NavBar;