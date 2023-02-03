import './Home.css';

import { motion as m } from 'framer-motion';

const Home = () => {
    return (
        <>
        <div className='home'>
            <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut'}}
            className='hero1'>
                Matthew Teh
            </m.div>

            <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            className='hero2'>
                Software Engineer
            </m.div>

        </div>
        </>
    )
}

export default Home;