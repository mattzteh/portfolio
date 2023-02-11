import Project from './project';
import projectsData from '../../assets/projects.js';

const ProjectsIndex = () => {

    return (
        <>
        <div className='comp-container'>
            <div className='projects'>
                <h1 className='projects-header'>My Projects</h1>
                <div className='projects-container'>
                        {projectsData.map(project => <div key={project.id}><Project project={project}/></div>)}
                </div>
            </div>
        </div>
        </>
    )
}

export default ProjectsIndex;