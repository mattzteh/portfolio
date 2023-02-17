import './Contact.css';
import { contactP1 } from '../../assets/text';
import { motion as m } from 'framer-motion';
import { fadeIn } from '../../util/animations';

const Contact = () => {

    return (
        <>
        <div className='comp-container'>
            <m.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delayChildren: 0.1, staggerChildren: 0.2 }}
            className='contact'>
                
                <div className='contact-header'>
                    <m.h2 variants={fadeIn}>Like my Work?</m.h2>
                    <m.h1 variants={fadeIn}>Let's connect.</m.h1>
                </div>

                <div className='contact-content'>{contactP1}</div>

                <div className='contact-buttons'>
                    <m.form variants={fadeIn} action="mailto: mattzteh@gmail.com">
                        <input type="submit" value="Email Me"/>
                    </m.form>
                </div>
            </m.div>
        </div>
        </>
    )
}

export default Contact;