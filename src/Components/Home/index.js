import './Home.css';
import About from '../About';
import ProjectsIndex from '../Projects';
import { homeContent } from '../../assets/text.js';

import { motion as m } from 'framer-motion';
import { fadeUp } from '../../util/animations';
import Contact from '../Contact';

const Home = () => {

    return (
        <>
        <m.div
		initial="hidden"
		whileInView="show"
		viewport={{ once: true, amount: 0.5 }}
		transition={{ delayChildren: 1, staggerChildren: 0.1 }}
        className='home-container'
        id="/">

            <div className='home-hero'>
                <div className='h-overflow'><m.h1 variants={fadeUp}>Matthew Teh</m.h1></div>
                <div className='h-overflow'><m.h2 variants={fadeUp}>Fullstack Software Engineer</m.h2></div>
                <div className='h-overflow'><m.h3 variants={fadeUp}>{homeContent}</m.h3></div>
            </div>
                
        </m.div>

        <div id="/about"><About /></div>
        <div id="/projects"><ProjectsIndex /></div>
        <div id="/contact"><Contact /></div>
        </>
    )
}

export default Home;