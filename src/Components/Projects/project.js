import './Project.css';

import { motion as m } from 'framer-motion';
import { fadeIn } from '../../util/animations';

const Project = ({project}) => {


    return (
        <>
        <m.div variants={fadeIn} className='project'>

            <div className='project-links'>
                <a href={project.live} target="_blank" rel="noreferrer">{project.icon}</a>
                <a href={project.github} target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
            </div>
            <div className='project-title'>{project.title}</div>
            <div className='project-description'>{project.description}</div>
            <div className='project-stack'>
                {
                    project.stack.map(el => <div>{el}</div>)
                }
                </div>


        </m.div>
        </>
    )
}

export default Project