import './About.css';
import { aboutText } from '../../assets/text';
import { skills } from '../../assets/skills';

import { useEffect } from 'react';
import { motion as m, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {

	const animation = useAnimation();
	const {ref, inView} = useInView({ threshold: 0.2 });

	useEffect(() => {
		if (inView) {
			animation.start({ opacity: 1, y: '0%', transition: { delay: 0.2, bounce: 0 }})
		} else {
			animation.start({ opacity: 0, y: '10%', transition: { delay: 0.2, bounce: 0 }})
		}
	}, [inView, animation]);

	return (
    <>
    <div className="comp-container">
		<m.div ref={ref} animate={animation} className='about'>
        	<div className='about-content'>
          		<div className='about-text'>
    				<h1>Welcome to my Website!</h1>
					<p>{aboutText[0]}</p>
					<p>{aboutText[1]}</p>
					<p>{aboutText[2]}</p>
          		</div>

				<div className='skills'>{skills}</div>
        	</div>
      	</m.div>
    </div>
    </>
    )
}

export default About;