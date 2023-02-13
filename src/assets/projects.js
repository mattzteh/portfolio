const ObjVals = (obj) => {
    let vals = []
    for (const prop in obj) {
        vals.push(obj[prop]);
    }
    return vals;
};

const projects = {
    'zzyWorks': {
        'id': 1,
        'title':'ZZY Works',
        'stack': ['React', 'Rails', 'AWS'],
        'live': 'https://zzyworks.herokuapp.com/',
        'github': 'https://github.com/mattzteh/ZZY-WORKS',
        'description': 'An eCommerce website clone of RAMA WORKS. Shop your dream keyboard today!',
        'icon': <i className="fa-regular fa-keyboard"></i>
    },
    'dinoTyper': {
        'id': 2,
        'title': 'DinoTyper',
        'stack': ['jQuery'],
        'live': 'https://mattzteh.github.io/DinoTyper/',
        'github': 'https://github.com/mattzteh/DinoTyper',
        'description': "Test your typing skills against a hungry dinosaur. Don't get eaten!",
        'icon': <i className="fa-solid fa-person-running"></i>
    },
    'gameBuddy': {
        'id': 3,
        'title': 'GameBuddy',
        'stack': ['MERN', 'Riot Games API'],
        'live': 'https://gamebuddy-app.herokuapp.com/',
        'github': 'https://github.com/killacan/gameBuddy',
        'description': 'Connect with friends and strangers and play games together.',
        'icon': <i className="fa-solid fa-gamepad"></i>
    }
}

export default ObjVals(projects);
