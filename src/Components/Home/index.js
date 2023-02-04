import './Home.css';

import { motion as m } from 'framer-motion';
import { container, fadeIn } from '../../util/animations';

const Home = () => {
    return (
        <>
        <div className='home'>

            <m.div variants={container} initial="hidden" animate="show" exit='exit' className='home-text'>

                <m.div variants={fadeIn} className='hero'>
                    Matthew Teh
                </m.div>

                <m.div variants={fadeIn} className='hero'>
                    Software Engineer
                </m.div>

            </m.div>
        </div>
        </>
    )
}

export default Home;