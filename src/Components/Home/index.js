import './Home.css';
import profile from '../../assets/profile.png';
import About from '../About';
import ProjectsIndex from '../Projects';

import { motion as m } from 'framer-motion';
import { homeAnimation, fadeIn, fadeUp } from '../../util/animations';
import Contact from '../Contact';

const Home = () => {

    return (
        <>
        <m.div
        variants={homeAnimation}
        initial="hidden"
        animate="show"
        className='comp-container'
        id="/">

                <div className='home-content'>
                    <m.img variants={fadeIn} src={profile} alt="mattzteh"></m.img>
                    <div className='home-hero'>
                        <div className='h-overflow'><m.h1 variants={fadeUp}>Matthew Teh</m.h1></div>
                        <div className='h-overflow'><m.h2 variants={fadeUp}>Fullstack Software Engineer</m.h2></div>
                    </div>
                </div>
                
        </m.div>

        <div id="/about"><About /></div>
        <div id="/projects"><ProjectsIndex /></div>
        <div id="/contact"><Contact /></div>
        </>
    )
}

export default Home;