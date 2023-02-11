import './Skills.css';
import { langs, libFrame, tech } from '../../assets/skills';
import { useState } from 'react';

const Skills = () => {

    const [onLang, setOnLang] = useState(true);
    const [onLib, setOnLib] = useState(false);
    const [onTech, setOnTech] = useState(false);

    const clickLang = (e) => {
        e.preventDefault();
        setOnLib(false);
        setOnTech(false);
        setOnLang(true);
    }
    const clickLib = (e) => {
        e.preventDefault();
        setOnLang(false);
        setOnTech(false);
        setOnLib(true);
    }
    const clickTech = (e) => {
        e.preventDefault();
        setOnLang(false);
        setOnLib(false);
        setOnTech(true);
    }

    return (
        <>
        <div className='skills'>
            <h1>My Skills</h1>
            <div className='skills-card'>
                <div className='tabs'>
                    <span onClick={clickLang}>Languages</span>
                    <span onClick={clickLib}>Libraries & Frameworks</span>
                    <span onClick={clickTech}>Technologies</span>
                </div>

                <div className='current-tab'>
                    {onLang ? <>{langs}</> : ''}
                    {onLib ? <>{libFrame}</> : ''}
                    {onTech ? <>{tech}</> : ''}
                </div>
            </div>

        </div>
        </>
    )
}

export default Skills;