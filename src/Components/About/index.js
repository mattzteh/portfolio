import './About.css';
import aboutPic from '../../assets/aboutPic.jpg';
import { aboutText } from '../../assets/text';

import { motion as m, useAnimation } from 'framer-motion';


const About = () => {
  
  return (
    <>
    <div className="comp-container">
		<div className='about'>
    		<m.h1>About Me </m.h1>
        	<div className='about-content'>
          		<div className='about-text'>
					<m.p>{aboutText[0]}</m.p>
					<m.p>{aboutText[1]}</m.p>
					<m.p>{aboutText[2]}</m.p>
          		</div>
          		<m.img src={aboutPic} alt="matthew" />
        	</div>  
      </div>


    </div>
    </>
    )
}

export default About;