import './Project.css';

import { motion as m } from 'framer-motion';
import { fadeIn } from '../../util/animations';

const Project = ({project}) => {


    return (
        <>
        <m.div variants={fadeIn} className='project'>

            <div className='project-title'>{project.title}</div>
                {
                    // isHovered &&
                    // <div className='project-info'>
                    //     <div className='project-links'>
                    //         <a href={project.live} target="_blank" rel="noreferrer">Live</a>
                    //         <a href={project.github} target="_blank" rel="noreferrer">Github</a>
                    //     </div>
                    //     <div className='project-description'>{project.description}</div>
                    //     <div className='project-stack'>{project.stack}</div>
                    // </div>
                }


        </m.div>
        </>
    )
}

export default Project