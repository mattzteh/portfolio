import Project from '../Project';
import projectsData from '../../util/projects.js';

import { motion as m } from 'framer-motion';
import { container, fadeIn } from '../../util/animations';

const ProjectsIndex = () => {

    return (
        <>
            <m.div variants={container} initial="hidden" animate="show" exit="exit" className='comp-container'>
                <m.h1 variants={fadeIn}>Projects</m.h1>
                <m.div>
                    {projectsData.map(project => {
                        return (
                                <m.div variants={fadeIn} className='project'>
                                    <Project project={project}></Project>
                                </m.div>
                        )
                    })}
                </m.div>
            </m.div>
        </>
    )
}

export default ProjectsIndex;