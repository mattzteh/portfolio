import './Projects.css';
import images from '../../assets/images';

import { useEffect, useRef, useState } from 'react';
import { motion as m } from 'framer-motion';
import { container, fadeLeft } from '../../util/animations';

const ProjectsIndex = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    return (
        <>
        <div className='projects-container'>
            <m.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            ref={carousel}
            className='projects'>
                <m.div
                drag="x"
                dragConstraints={{right:0, left: -width}}
                whileTap={{cursor:"grabbing"}}
                className='projects-carousel'>
                    {images.map(image => {
                        return (
                            <div className='project-container'>
                            <m.div
                            variants={fadeLeft}
                            className='project'
                            key={image}>
                                <img src={image} alt="project"></img>
                            </m.div>
                            </div>
                        )
                    })}
                </m.div>
            </m.div>
        </div>
        </>
    )
}

export default ProjectsIndex;