import './Contact.css';

const Contact = () => {

    const resumeLink = 'https://drive.google.com/file/d/1YXNPYCfwiUlQy1EcMcwDN6Smu8bcvXYT/view?usp=sharing'

    return (
        <>
        <div className='comp-container'>
            <div className='contact'>

                <div className='contact-header'>
                    <h1>Like my Work?</h1>
                    <h2>Let's talk.</h2>
                </div>

                <div className='contact-content'>
                    <p>
                        I am currently open to any full-time, part-time, or freelance roles.
                        If you would like to discuss future opportunities with me, or
                        even just to talk and network, feel free to send me an email, or connect
                        with me on LinkedIn. I look forward to hearing from you!
                    </p>
                </div>

                <div className='contact-buttons'>
                    <a href={resumeLink} target="_blank" rel="noreferrer">Resume</a>
                    <a href='mailto: mattzteh@gmail.com'>Email Me</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;