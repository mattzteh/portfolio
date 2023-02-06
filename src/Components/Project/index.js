import './Project.css';

const Project = ({project}) => {
    return (
        <>
        <div className='project-container'>
            <img className="project-img" src={project.img} alt="project"></img>
            <div className='project-info'>
                <a href={project.live} target="_blank" rel="noreferrer">{project.title}</a>
            </div>
        </div>
        </>
    )
}

export default Project