import './NavBar.css';

import { NavLink, useLocation } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import { container, fadeUp } from '../../util/animations';
const NavBar = () => {

    const classNames = ['/', '/about', '/projects'];

    const location = useLocation();
    const navBarToggle = (className) => {
        if (location.pathname === className) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <>
        <nav className='navbar'>
            <m.div variants={container} initial="hidden" animate="show" className='links'>
                
                <m.div variants={fadeUp} className='link'>
                    <NavLink exact to="/" style={{ textDecoration: 'none' }}>
                        <nav className={navBarToggle(classNames[0]) ? 'onComponent' : '' }>Home</nav>
                    </NavLink>
                </m.div>
                
                <m.div variants={fadeUp} className='link'>
                    <NavLink exact to="/about" style={{ textDecoration: 'none' }}>
                        <nav className={navBarToggle(classNames[1]) ? 'onComponent' : '' }>About Me</nav>
                    </NavLink> 
                </m.div>

                <m.div variants={fadeUp} className='link'>
                    <NavLink exact to="/projects" style={{ textDecoration: 'none' }}>
                        <nav className={navBarToggle(classNames[2]) ? 'onComponent' : '' }>Projects</nav>
                    </NavLink>
                </m.div>
            </m.div>
        </nav>
        </>
    )
}

export default NavBar;