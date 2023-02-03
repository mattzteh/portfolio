import './Footer.css';

import { motion as m } from 'framer-motion';
import { container, fadeUp } from '../../util/animations';

const Footer = () => {
    return (
        <>
        <div className='footer'>
        <m.div variants={container} initial="hidden" animate="show" className='links'>

            <m.div variants={fadeUp} className="socials">
                GitHub
            </m.div>

            <m.div variants={fadeUp} className="socials">
                LinkedIn
            </m.div>

            <m.div variants={fadeUp} className="socials">
                AngelList
            </m.div>

            <m.div variants={fadeUp} className="socials">
                Email
            </m.div>

        </m.div>
        </div>
        </>
    )
}

export default Footer;