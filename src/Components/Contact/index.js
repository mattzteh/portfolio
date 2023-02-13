import './Contact.css';

import { motion as m } from 'framer-motion';
import { fadeIn } from '../../util/animations';

const Contact = () => {

    const resumeLink = 'https://drive.google.com/file/d/1YXNPYCfwiUlQy1EcMcwDN6Smu8bcvXYT/view?usp=sharing';

    return (
        <>
        <div className='comp-container'>
            <m.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delayChildren: 0.1, staggerChildren: 0.2 }}
            className='contact'>

                <div className='contact-header'>
                    <m.h1 variants={fadeIn}>Like my Work?</m.h1>
                    <m.h2 variants={fadeIn}>Let's talk.</m.h2>
                </div>

                <div className='contact-content'>
                    <m.p variants={fadeIn}>
                        I am currently open to any full-time, part-time, or freelance roles.
                        If you would like to discuss future opportunities with me, or
                        even just to talk and network, feel free to send me an email, or connect
                        with me on LinkedIn. I look forward to hearing from you!
                    </m.p>
                </div>

                <div className='contact-buttons'>
                    <m.a variants={fadeIn} href={resumeLink} target="_blank" rel="noreferrer">Resume</m.a>
                    <m.a variants={fadeIn} href='mailto: mattzteh@gmail.com'>Email Me</m.a>
                </div>
            </m.div>
        </div>
        </>
    )
}

export default Contact;