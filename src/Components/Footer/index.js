import './Footer.css';

import { motion as m } from 'framer-motion';
import { container, fadeIn, fadeUp } from '../../util/animations';

const Footer = () => {
    return (
        <>
        <div className='footer'>
            <m.ul variants={container} initial="hidden" animate="show" className='footer-links'>

                <m.li variants={fadeIn} className="socials">
                    <a href='https://github.com/mattzteh' target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </m.li>

                <m.li variants={fadeIn} className="socials">
                    <a href='https://www.linkedin.com/in/mattzteh/' target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                </m.li>

                <m.li variants={fadeIn} className="socials">
                    <a href='https://angel.co/u/matthew-teh-1' target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-angellist"></i>
                    </a>
                </m.li>

                <m.li variants={fadeIn} className="socials">
                    <a href='https://www.instagram.com/mattzteh/' target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </m.li>

                <m.li variants={fadeIn} className="socials">
                    <a href='mailto: mattzteh@gmail.com'>
                        <i class="fa-regular fa-envelope"></i>
                    </a>
                </m.li>

                <m.li variants={fadeUp} className='vl'></m.li>
            </m.ul>
        </div>
        </>
    )
}

export default Footer;