import './Home.css';

import { motion as m } from 'framer-motion';

const Home = () => {
    return (
        <>
        <div className='home'>

            <div className='home-text'>

                <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                className='hero'>
                    Matthew Teh
                </m.div>

                <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                className='hero'>
                    Software Engineer
                </m.div>

            </div>
        </div>
        </>
    )
}

export default Home;