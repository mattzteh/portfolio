import './Footer.css';

import { motion as m } from 'framer-motion';
import { fadeIn, fadeUp } from '../../util/animations';

const Footer = () => {
    return (
        <>
        <div className='footer-container'>
            <m.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delayChildren: 2, staggerChildren: 0.1 }}
            className='footer'>

                <m.li variants={fadeIn} className="socials">
                    <a href='https://github.com/mattzteh' target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </m.li>

                <m.li variants={fadeIn} className="socials">
                    <a href='https://www.linkedin.com/in/mattzteh/' target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </m.li>

                <m.li variants={fadeIn} className="socials">
                    <a href='https://angel.co/u/matthew-teh-1' target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-angellist"></i>
                    </a>
                </m.li>

                <m.li variants={fadeUp} className='vl'></m.li>
            </m.ul>
        </div>
        </>
    )
}

export default Footer;