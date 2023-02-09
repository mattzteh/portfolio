import './Home.css';
import profile from '../../assets/profile.png';
import About from '../About';
import ProjectsIndex from '../Projects';

import { motion as m } from 'framer-motion';
import { container, fadeIn, fadeLeft, fadeRight, fadeDown } from '../../util/animations';

const Home = () => {

    return (
        <>
        <m.div variants={container} initial="hidden" animate="show" exit='exit' className='home'>
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

        <div>
            <About />
        </div>
        <div>
            <ProjectsIndex />
        </div>
        </>
    )
}

export default Home;