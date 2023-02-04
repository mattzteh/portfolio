import './Project.css';

import { useState } from 'react';

const Project = ({project}) => {

    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className='project-container'>
                <a href={project.live} target='_blank' rel='noreferrer'><h1>{project.title}</h1></a>
                {isHover && <div>yellow</div>}
            </div>

        </>
    )
}

export default Project;