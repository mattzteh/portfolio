import Project from './project';
import projectsData from '../../util/projects.js';

import { motion as m } from 'framer-motion';
import { container, fadeIn } from '../../util/animations';

const ProjectsIndex = () => {

    return (
        <>
        <div className='comp-container'>
            <div className='projects'>
                <h1 className='projects-header'>Projects</h1>
                <ul>
                    {
                        projectsData.map(project => 
                            <li key={project.id}><Project project={project}/></li>
                            )
                        }
                </ul>
            </div>
        </div>
        </>
    )
}

export default ProjectsIndex;