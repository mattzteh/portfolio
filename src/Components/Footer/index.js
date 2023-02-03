import './Footer.css';

import { motion as m } from 'framer-motion';
import { container, fadeUp } from '../../util/animations';

const Footer = () => {
    return (
        <>
        <div className='footer'>
        <m.div variants={container} initial="hidden" animate="show" className='links'>

            <m.div variants={fadeUp} className="socials">
                <h1 className='social-header'>Contact Me:</h1>
            </m.div>

            <m.div variants={fadeUp} className="socials">
                <a href='https://github.com/mattzteh' target="_blank" rel="noreferrer">01. GitHub</a>
            </m.div>

            <m.div variants={fadeUp} className="socials">
                <a href='https://www.linkedin.com/in/mattzteh/' target="_blank" rel="noreferrer">02. LinkedIn</a>
            </m.div>

            <m.div variants={fadeUp} className="socials">
                <a href='https://angel.co/u/matthew-teh-1' target="_blank" rel="noreferrer">03. Angel</a>
            </m.div>

            <m.div variants={fadeUp} className="socials">
                <a href='mailto: mattzteh@gmail.com'>04. Email</a>
            </m.div>

        </m.div>
        </div>
        </>
    )
}

export default Footer;