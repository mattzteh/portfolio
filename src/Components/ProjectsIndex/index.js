import './ProjectsIndex.css';
import ProjectIndexItem from '../ProjectsIndexItem';
import { projects } from '../../assets/projects';
import { objVals } from '../../util/helperFunctions';

import { motion as m } from 'framer-motion';

const ProjectsIndex = () => {

    const projectData = objVals(projects);
    console.log(projectData);

    return (
        <>
        <div className='projects'>
            <m.ul>
                {
                    projectData.map(project => <m.li key={project.id}><ProjectIndexItem project={project} /></m.li>)
                }
            </m.ul>
        </div>
        </>
    )
}

export default ProjectsIndex;