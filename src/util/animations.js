export const container = {
    hidden: { opacity: 0 },
    show: { 
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        }
    },
    exit: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        }
    }
}

export const fadeUp = {
    hidden: { y: '100%'},
    show: { y: '0%', transition: { duration: 0.5 }},
    exit: { y: '100%', transition: { duration: 0.5 }}
}

export const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5 } }
}