import './NavBar.css';

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import { container, fadeUp } from '../../util/animations';
import { debounce } from '../../util/debounce';
const NavBar = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
  
    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
        setIsVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    }, 100);
  
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, isVisible, handleScroll]);
  
    const navbarStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 10000,
        position: 'sticky',
        top: 0,
        backgroundColor: '#141414',
        paddingTop: '15px',
        paddingLeft: '5%',
        paddingRight: '5%',
        transition: 'top 0.6s'
    }

    return (
        <>
        <m.nav variants={container} initial="hidden" animate="show" className='navbar' style={{ ...navbarStyles, top: isVisible ? '0' : '-60px' }}>

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