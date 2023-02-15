import './About.css';
import { aboutText } from '../../assets/text';
import { skills } from '../../assets/skills';

import { motion as m } from 'framer-motion';
import { fadeIn, fadeUp } from '../../util/animations';

const About = () => {

	return (
    <>
    <div className="comp-container">
		<m.div
		initial="hidden"
		whileInView="show"
		viewport={{ once: true, amount: 0.5 }}
		transition={{ delayChildren: 0.1, staggerChildren: 0.2 }}
		className='about'>

        	<div className='about-content'>
          		<div className='about-text'>
    				<m.h1 variants={fadeIn}>About Me</m.h1>
					{aboutText[0]}
					{aboutText[1]}
					{aboutText[2]}
					{aboutText[3]}
          		</div>

				<div className='h-overflow'>
					<m.div variants={fadeUp} className='skills'>{skills}</m.div>
				</div>
        	</div>
			
      	</m.div>
    </div>
    </>
    )
}

export default About;