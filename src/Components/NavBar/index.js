import './NavBar.css';

import { NavLink } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import { container, fadeUp } from '../../util/animations';
const NavBar = () => {

    return (
        <>
        <nav className='navbar'>
            <m.div variants={container} initial="hidden" animate="show" className='links'>
                
                <m.div variants={fadeUp} className='link'>
                    <NavLink exact to="/" style={{ textDecoration: 'none' }}><nav>Home</nav></NavLink>
                </m.div>
                
                <m.div variants={fadeUp} className='link'>
                    <NavLink exact to="/about" style={{ textDecoration: 'none' }}><nav>About Me</nav></NavLink> 
                </m.div>

                <m.div variants={fadeUp} className='link'>
                    <NavLink exact to="/projects" style={{ textDecoration: 'none' }}><nav>Projects</nav></NavLink>
                </m.div>
            </m.div>
        </nav>
        </>
    )
}

export default NavBar;