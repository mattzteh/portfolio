import './About.css';
import aboutPic from '../../assets/aboutPic.jpg';
import { aboutText } from '../../assets/text';

import { useEffect } from 'react';
import { motion as m, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {

	const animation = useAnimation();
	const {ref, inView} = useInView({threshold: 0.2});

	useEffect(() => {
		if (inView) {
			animation.start({opacity: 1, transition: {delay: 0.2}})
		} else {
			animation.start({opacity: 0, transition: {delay: 0.2}})
		}
	}, [inView, animation]);

	return (
    <>
    <div className="comp-container">
		<m.div ref={ref} animate={animation} className='about'>
    		<h1>About Me </h1>
        	<div className='about-content'>
          		<div className='about-text'>
					<p>{aboutText[0]}</p>
					<p>{aboutText[1]}</p>
					<p>{aboutText[2]}</p>
          		</div>
          		<img src={aboutPic} alt="matthew" />
        	</div>  
      	</m.div>
    </div>
    </>
    )
}

export default About;