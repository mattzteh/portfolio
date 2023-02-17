import './Email.css';

import { motion as m } from "framer-motion";
import { fadeIn, fadeUp } from "../../util/animations";

const Email = () => {
    return (
        <>
        <div className='email-container'>

            <m.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delayChildren: 2, staggerChildren: 0.4 }}
            className="email-footer">    

                <m.div variants={fadeIn} className="email-link">
                    <a href='mailto: mattzteh@gmail.com'>mattzteh@gmail.com</a>
                </m.div>

                <m.div variants={fadeUp} className="email-vl"></m.div>

            </m.div>

        </div>
        </>
    )
}

export default Email;