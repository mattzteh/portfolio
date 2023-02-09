import './Project.css';

const Project = ({project}) => {
    return (
        <>
            <div className='project-info'>
                <a href={project.live} target="_blank" rel="noreferrer">{project.title}</a>
            </div>
        </>
    )
}

export default Project