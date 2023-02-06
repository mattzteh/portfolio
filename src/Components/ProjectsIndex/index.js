import Project from '../Project';
import projectsData from '../../util/projects.js';

import { useEffect, useRef, useState } from 'react';
import { motion as m } from 'framer-motion';
import { container, fadeIn } from '../../util/animations';

const ProjectsIndex = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <>
        <div className='projects-container'>
            <m.div variants={container} initial="hidden" animate="show" exit="exit"
            ref={carousel} className='projects'>

                <m.div drag="x" dragConstraints={{right:0, left: -width}} whileTap={{cursor:"grabbing"}}
                className='projects-carousel'>

                    {projectsData.map(project => {
                        return (

                                <m.div variants={fadeIn}>
                                    <Project project={project}></Project>
                                </m.div>

                        )
                    })}
                </m.div>
            </m.div>
        </div>
        </>
    )
}

export default ProjectsIndex;