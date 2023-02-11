import './About.css';
import { aboutText } from '../../assets/text';

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
    		<h1>Welcome to my Website!</h1>
        	<div className='about-content'>
          		<div className='about-text'>
					<p>{aboutText[0]}</p>
					<p>{aboutText[1]}</p>
					<p>{aboutText[2]}</p>
					<p><a href='mailto: mattzteh@gmail.com'>Hire me!</a></p>
          		</div>
        	</div>
      	</m.div>
    </div>
    </>
    )
}

export default About;