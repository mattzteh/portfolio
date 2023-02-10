import './NavBar.css';

import { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion';
import { container, fadeUp } from '../../util/animations';
import { debounce } from '../../util/debounce';
import { Link } from 'react-scroll';

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
        padding: '15px 5%',
        boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)',
        transition: 'top 0.4s'
    }


    return (
        <>
        <m.nav variants={container} initial="hidden" animate="show" className='navbar' style={{ ...navbarStyles, top: isVisible ? '0' : '-60px' }}>

            <m.div className='home-link'>
                <m.div variants={fadeUp} className='link'>
                    <Link to="/" spy={true} smooth={true} offset={-100} duration={200}>
                        <nav><i class="fa-solid fa-m"></i><i class="fa-solid fa-t"></i></nav>
                    </Link>
                </m.div>
            </m.div>
                
            <div className='links'>
                <m.div variants={fadeUp} className='link'>
                    <Link to="/about" spy={true} smooth={true} offset={50} duration={200}>
                        <nav>About</nav>
                    </Link> 
                </m.div>

                <m.div variants={fadeUp} className='link'>
                    <Link to="/projects" spy={true} smooth={true} offset={50} duration={200}>
                        <nav>Projects</nav>
                    </Link>
                </m.div>
            </div>
        </m.nav>
        </>
    )
}

export default NavBar;