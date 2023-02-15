import './Email.css';

import { motion as m } from "framer-motion";
import { fadeIn, fadeUp } from "../../util/animations";

const Email = () => {
    return (
        <>
        <div className='email-container'>
            <m.div className="email-footer">       
                <m.div className="email-link">
                    <a href='mailto: mattzteh@gmail.com'>mattzteh@gmail.com</a>
                </m.div>
                <m.div variants={fadeUp} className="email-vl"></m.div>
            </m.div>
        </div>
        </>
    )
}

export default Email;