import './About.css';

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
      <div className='about-content'>
        <h1>About Me</h1>
        <p>Welcome to my website! My name is Matt. I have a passion for Web Development 
          and love creating and designing websites. I started my journey as a Software 
          Engineer back in 2022, when I decided to make a career change from Business/Finance. 
          Since writing my first program of "Hello World", I have truly rediscovered my love 
          for learning and am hungry to always learn more and build my skillsets. I am 
          currently looking for opportunities to showcase my skills and be a part of a team
          that works on meaningful and beautiful projects!
        </p>
        <h2>My Skills:</h2>
        <ul>
          <li><i class="fa-solid fa-angle-right"></i>JavaScript</li>
          <li><i class="fa-solid fa-angle-right"></i>Python</li>
          <li><i class="fa-solid fa-angle-right"></i>Ruby</li>
          <li><i class="fa-solid fa-angle-right"></i>Ruby on Rails</li>
          <li><i class="fa-solid fa-angle-right"></i>React.js</li>
          <li><i class="fa-solid fa-angle-right"></i>Node.js</li>
          <li><i class="fa-solid fa-angle-right"></i>Express.js</li>
          <li><i class="fa-solid fa-angle-right"></i>MongoDB</li>
          <li><i class="fa-solid fa-angle-right"></i>SQL</li>
          <li><i class="fa-solid fa-angle-right"></i>HTML/CSS</li>
        </ul>
      </div>  
    </m.div>
    </>
    )
}

export default About;