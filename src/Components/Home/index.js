import './Home.css';
import profile from '../../assets/profile.png';

import { motion as m } from 'framer-motion';
import { container, fadeIn } from '../../util/animations';

const Home = () => {

    return (
        <>
        <m.div variants={container} initial="hidden" animate="show" exit='exit' className='home'>

                <img src={profile} alt="mattzteh"></img>

        </m.div>
        </>
    )
}

export default Home;