import './Footer.css';

import { motion as m } from 'framer-motion';
import { container, fadeUp } from '../../util/animations';

const Footer = () => {
    return (
        <>
        <div className='footer'>
            <m.div variants={container} initial="hidden" animate="show" className='footer-links'>

                <m.div variants={fadeUp} className="socials">
                    <a href='https://github.com/mattzteh' target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </m.div>

                <m.div variants={fadeUp} className="socials">
                    <a href='https://www.linkedin.com/in/mattzteh/' target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </m.div>

                <m.div variants={fadeUp} className="socials">
                    <a href='https://angel.co/u/matthew-teh-1' target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-angellist"></i>
                    </a>
                </m.div>

                <m.div variants={fadeUp} className="socials">
                    <a href='mailto: mattzteh@gmail.com'>
                        <i class="fa-solid fa-envelope"></i>
                    </a>
                </m.div>

                <m.div variants={fadeUp} className='vl'></m.div>
            </m.div>
        </div>
        </>
    )
}

export default Footer;