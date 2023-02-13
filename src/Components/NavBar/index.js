import './NavBar.css';

import { useState, useEffect } from 'react';
import { motion as m } from 'framer-motion';
import { navBarAnimation, fadeUp } from '../../util/animations';
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

    return (
        <>
        <m.nav variants={navBarAnimation} initial="hidden" animate="show" className='navbar' style={{top: isVisible ? '0' : '-60px' }}>

            <m.div className='home-link'>
                <m.div variants={fadeUp} className='link'>
                    <Link to="/" spy={true} smooth={true} offset={-100} duration={200}>
                        <nav><i class="fa-solid fa-m"></i><i class="fa-solid fa-t"></i></nav>
                    </Link>
                </m.div>
            </m.div>
                
            <div className='links'>
                <m.div variants={fadeUp} className='link'>
                    <Link to="/about" spy={true} smooth={true} offset={-100} duration={200}>
                        <nav>About</nav>
                    </Link> 
                </m.div>

                <m.div variants={fadeUp} className='link'>
                    <Link to="/projects" spy={true} smooth={true} offset={50} duration={200}>
                        <nav>Projects</nav>
                    </Link>
                </m.div>
                <m.div variants={fadeUp} className='link'>
                    <Link to="/contact" spy={true} smooth={true} offset={50} duration={200}>
                        <nav>Contact</nav>
                    </Link>
                </m.div>
            </div>
        </m.nav>
        </>
    )
}

export default NavBar;