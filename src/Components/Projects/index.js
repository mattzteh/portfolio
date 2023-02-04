import './Projects.css';

import { motion as m } from 'framer-motion';

const Projects = () => {

    return (
        <>
        <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut'}}  
        className='projects'>

            <ul>
                <li>
                    <a href='https://zzyworks.herokuapp.com/' target='_blank' rel='noreferrer'>ZZY Works</a>
                </li>

                <li>
                    <a href='https://mattzteh.github.io/DinoTyper/' target='_blank' rel='noreferrer'>Dino Typer</a>
                </li>

                <li>
                    <a href='https://gamebuddy-app.herokuapp.com/' target='_blank' rel='noreferrer'>Game Buddy</a>
                </li>
            </ul>

        </m.div>
        </>
    )
}

export default Projects;