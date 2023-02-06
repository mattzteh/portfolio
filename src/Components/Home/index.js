import './Home.css';
import profile from '../../assets/profile.png';

import { motion as m } from 'framer-motion';
import { container, fadeIn } from '../../util/animations';

const Home = () => {

    return (
        <>
        <m.div variants={container} initial="hidden" animate="show" exit='exit' className='home'>

            <m.div variants={fadeIn} className='home-arrows'>
                <div><i class="fa-solid fa-arrow-left-long"></i></div>                
                <img src={profile} alt="mattzteh"></img>
                <div><i class="fa-solid fa-arrow-right-long"></i></div>
            </m.div>

        </m.div>
        </>
    )
}

export default Home;