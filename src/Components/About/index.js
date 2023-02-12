import './About.css';
import { aboutText } from '../../assets/text';
import { skills } from '../../assets/skills';

import { motion as m } from 'framer-motion';
import { fadeIn } from '../../util/animations';

const About = () => {

	return (
    <>
    <div className="comp-container">
		<m.div
		initial="hidden"
		whileInView="show"
		viewport={{once:true}}
		transition={{staggerChildren:0.2}}
		className='about'>

        	<div className='about-content'>
          		<div className='about-text'>
    				<m.h1 variants={fadeIn}>Welcome to my Website!</m.h1>
					<m.p variants={fadeIn}>{aboutText[0]}</m.p>
					<m.p variants={fadeIn}>{aboutText[1]}</m.p>
					<m.p variants={fadeIn}>{aboutText[2]}</m.p>
					<m.p variants={fadeIn}>{aboutText[3]}</m.p>
          		</div>
				<div className='skills'>{skills}</div>
        	</div>
      	</m.div>
    </div>
    </>
    )
}

export default About;