export const navBarAnimation = {
    hidden: { opacity: 0 },
    show: { 
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2,
        }
    },
    exit: {
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2,
        }
    }
}

export const homeAnimation = {
    hidden: { opacity: 0 },
    show: { 
        opacity: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: 0.2,
        }
    },
    exit: {
        transition: {
            delayChildren: 1,
            staggerChildren: 0.2,
        }
    }
}

export const footerAnimation = {
    hidden: { opacity: 0 },
    show: { 
        opacity: 1,
        transition: {
            delayChildren: 1.5,
            staggerChildren: 0.2,
        }
    },
    exit: {
        transition: {
            delayChildren: 1.5,
            staggerChildren: 0.2,
        }
    }
}


export const fadeUp = {
    hidden: { y: '100%'},
    show: { y: '0%', transition: { duration: 0.5 }},
    exit: { y: '100%', transition: { duration: 0.5 }}
}

export const fadeDown = {
    hidden: { y: '-100%'},
    show: { y: '0%', transition: { duration: 0.5 }},
    exit: { y: '-100%', transition: { duration: 0.5 }}
}

export const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5 } }
}

export const fadeLeft = {
    hidden: { x: '100%'},
    show: { x: '0%', transition: { duration: 0.5 }},
    exit: { x: '100%', transition: { duration: 0.5 }}
}

export const fadeRight = {
    hidden: { x: '-100%'},
    show: { x: '0%', transition: { duration: 0.5 }},
    exit: { x: '-100%', transition: {duration: 0.5 }}
}