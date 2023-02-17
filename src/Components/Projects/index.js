import Project from './project';
import projectsData from '../../assets/projects.js';

import { motion as m } from 'framer-motion';
import { fadeIn } from '../../util/animations';

const ProjectsIndex = () => {

    return (
        <>
        <m.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delayChildren: 0.2, staggerChildren: 0.2 }}
        className='projects'>

            <m.h1 variants={fadeIn} className='projects-header'>My Projects</m.h1>
            <div className='projects-container'>
                {projectsData.map(project => <div key={project.id}><Project project={project}/></div>)}
            </div>
        </m.div>
        </>
    )
}

export default ProjectsIndex;