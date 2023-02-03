import './NavBar.css';

import { NavLink } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import { container, item } from '../../util/animations';
const NavBar = () => {

    return (
        <>
        <nav className='navbar'>
            <m.div variants={container} initial="hidden" animate="show" className='links'>

                <m.div variants={item} className='link'>
                    <NavLink exact to="/" style={{ textDecoration: 'none' }} />
                    Home
                </m.div>
                
                <m.div variants={item} className='link'>
                    <NavLink to="/about" style={{ textDecoration: 'none' }} />
                    About Me
                </m.div>

                <m.div variants={item} className='link'>
                    <NavLink to="projects" style={{ textDecoration: 'none' }} />
                    Projects
                </m.div>
                
            </m.div>
        </nav>
        </>
    )
}

export default NavBar;