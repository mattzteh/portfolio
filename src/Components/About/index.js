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
      <div className='about-content'>
        <h1>Hello, my name is Matthew!</h1>
        <p>I have a passion for Web Development and love creating and designing websites.
          I started my journey as a Software Engineer back in 2022, when I decided to make a
          career change from Business/Finance. 
        </p>
      </div>  
    </m.div>
    </>
    )
}

export default About;