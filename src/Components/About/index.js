import './About.css';

import { motion as m } from 'framer-motion';

const About = () => {
    return (
        <>
        <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        exit={{ opacity: 0 }}
        className="about">
          <div className='about-content'></div>  
        </m.div>
        </>
    )
}

export default About;