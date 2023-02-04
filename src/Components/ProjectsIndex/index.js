import './ProjectsIndex.css';

import { objVals } from '../../util/helperFunctions';
import { projects } from '../../util/projects';

const ProjectsIndex = () => {

    const projectsData = objVals(projects);

    return (
        <>
        <div className='projects'>
            <ul>
                {
                    projectsData.map(project => <li key={project.id}></li>)
                }
            </ul>
        </div>
        </>
    )
}

export default ProjectsIndex;