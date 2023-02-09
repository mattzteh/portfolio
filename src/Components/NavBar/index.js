import './NavBar.css';

import { NavLink } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import { container, fadeUp } from '../../util/animations';
const NavBar = () => {

    return (
        <>
        <m.nav variants={container} initial="hidden" animate="show" className='navbar'>

            <m.div className='home-link'>
                <m.div variants={fadeUp} className='link'>
                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                        <nav><i class="fa-solid fa-m"></i><i class="fa-solid fa-t"></i></nav>
                    </NavLink>
                </m.div>
            </m.div>
                
            <div className='links'>
                <m.div variants={fadeUp} className='link'>
                    <NavLink to="/about" style={{ textDecoration: 'none' }}>
                        <nav>About</nav>
                    </NavLink> 
                </m.div>

                <m.div variants={fadeUp} className='link'>
                    <NavLink to="/projects" style={{ textDecoration: 'none' }}>
                        <nav>Projects</nav>
                    </NavLink>
                </m.div>
            </div>
        </m.nav>
        </>
    )
}

export default NavBar;