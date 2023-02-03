import './NavBar.css';

import { NavLink } from 'react-router-dom';
import { motion as m } from 'framer-motion';
const NavBar = () => {

    return (
        <>
        <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75 }}
        exit={{ opacity: 1 }}
        className='navbar'>
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
        </m.div>
        </>
    )
}

export default NavBar;