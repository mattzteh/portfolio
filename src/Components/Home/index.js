import './Home.css';
import profile from '../../assets/profile.png';
import About from '../About';
import ProjectsIndex from '../Projects';

import { motion as m } from 'framer-motion';
import { container, fadeIn, fadeLeft, fadeRight } from '../../util/animations';

const Home = () => {

    return (
        <>
        <m.div variants={container} initial="hidden" animate="show" exit='exit' className='comp-container' id="/">
            <div className='h-overflow'>
                <div className='home-content'>
                    <m.img variants={fadeIn} src={profile} alt="mattzteh"></m.img>
                    <m.div variants={container} initial="hidden" animate="show" exit='exit' className='home-hero'>
                        <m.h1 variants={fadeLeft}>Matthew Teh</m.h1>
                        <m.h2 variants={fadeRight}>Fullstack Software Engineer</m.h2>
                    </m.div>
                </div>
            </div>
        </m.div>

        <div id="/about">
            <About />
        </div>
        <div id="/projects">
            <ProjectsIndex />
        </div>
        </>
    )
}

export default Home;