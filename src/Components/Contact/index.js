import './Contact.css';
import { contactP1, resumeLink } from '../../assets/text';
import { motion as m } from 'framer-motion';
import { fadeIn } from '../../util/animations';

const Contact = () => {

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

                <div className='contact-content'><m.p variants={fadeIn}>{contactP1}</m.p></div>

                <div className='contact-buttons'>

                    <m.form  variants={fadeIn} action={resumeLink} target="_blank" rel="noreferrer">
                        <input type="submit" value="Resume"/>
                    </m.form>

                    <m.form variants={fadeIn} action="mailto: mattzteh@gmail.com">
                        <input type="submit" value="Email"/>
                    </m.form>

                </div>
            </m.div>
        </div>
        </>
    )
}

export default Contact;