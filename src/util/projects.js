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
        'stack': 'Rails, React, AWS',
        'live': 'https://zzyworks.herokuapp.com/',
        'github': 'https://github.com/mattzteh/ZZY-WORKS',
        'description': 'An eCommerce website clone of RAMA WORKS. Full CRUD features (users, cart, reviews)'
    },
    'dinoTyper': {
        'id': 2,
        'title': 'DinoTyper',
        'stack': 'JavaScript, jQuery',
        'live': 'https://mattzteh.github.io/DinoTyper/',
        'github': 'https://github.com/mattzteh/DinoTyper',
        'description': "Test your typing skills against a hungry dinosaur. Don't get eaten!"
    },
    'gameBuddy': {
        'id': 3,
        'title': 'GameBuddy',
        'stack': 'M.E.R.N',
        'live': 'https://gamebuddy-app.herokuapp.com/',
        'github': 'https://github.com/killacan/gameBuddy',
        'description': 'Connect with friends and strangers and play games together.'
    }
}

export default ObjVals(projects);
