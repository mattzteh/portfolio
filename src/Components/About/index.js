import './About.css';
import aboutPic from '../../assets/aboutPic.jpg';
import { motion as m } from 'framer-motion';

const About = () => {

    return (
    <>
    <m.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.75, ease: 'easeOut' }}
    exit={{ opacity: 0 }}
    className="comp-container">

      <div className='about'>
        <h1>About Me</h1>

        <div className='about-content'>

          <div className='about-text'>
          <p>
            Hi! My name is Matthew, and welcome to my website! I have a passion for Web Development and I love 
            creating and designing websites.
          </p>
          <p>
            My journey as a Software Engineer began back in 2022, 
            when I decided I was not happy in the Business / Finance industry. From coding my first "Hello 
            World" program to creating a fully fledged website, I have truly rediscovered my love for 
            learning and am hungry to constantly learn more and build my skillset.
          </p>
          <p>
            I am currently looking for opportunities to work as a Software Engineer and I am excited to be 
            a part of a team that works on meaningful and impactful projects!
          </p>
          </div>

          <img src={aboutPic} alt="matthew" />
        </div>  
      </div>


    </m.div>
    </>
    )
}

export default About;