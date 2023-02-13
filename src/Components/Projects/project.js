import './Project.css';

import { motion as m } from 'framer-motion';
import { fadeIn } from '../../util/animations';

const Project = ({project}) => {


    return (
        <>
        <a href={project.live} target="_blank" rel="noreferrer">
            <m.div variants={fadeIn} className='project'>

                <div className='project-links'>
                    <div>{project.icon}</div>
                    <a href={project.github} target="_blank" rel="noreferrer"><i className="fa-brands fa-github" id="git-link"></i></a>
                </div>
                <div className='project-title'>{project.title}</div>
                <div className='project-description'>{project.description}</div>
                <div className='project-stack'>
                    {
                        project.stack.map(el => <div>{el}</div>)
                    }
                    </div>
            </m.div>
        </a>
        </>
    )
}

export default Project