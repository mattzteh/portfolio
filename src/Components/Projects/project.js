import './Project.css';

const Project = ({project}) => {
    return (
        <>
        <div className='project'>

            <div className='project-links'>
                <a href={project.live} target="_blank" rel="noreferrer"><i class="fa-regular fa-window-restore"></i></a>
                <a href={project.github} target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
            </div>

            <div className='project-title'>{project.title}</div>
            <div className='project-description'>{project.description}</div>
            <div className='project-stack'>{project.stack}</div>

        </div>
        </>
    )
}

export default Project