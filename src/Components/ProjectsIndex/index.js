import Project from '../Projects';
import { objVals } from '../../util/helperFunctions';
import { projects } from '../../util/projects';
import { motion as m } from 'framer-motion';
import { container, fadeUp } from '../../util/animations';

const ProjectsIndex = () => {

    const projectsData = objVals(projects);

    return (
        <>
        <div className='projects'>
            <m.ul variants={container} initial="hidden" animate="show" exit='exit'>
                {
                    projectsData.map(project =>
                    <div className='project'>
                        <m.li variants={fadeUp} key={project.id}>
                            <Project project={project}/>
                        </m.li>
                    </div>)
                }
            </m.ul>
        </div>
        </>
    )
}

export default ProjectsIndex;