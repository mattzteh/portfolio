import images from '../assets/images';

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
        'stack': ['Ruby on Rails', 'JavaScript', 'React.js', 'Redux.js', 'AWS S3', 'AWS IAM', 'PostgreSQL'],
        'live': 'https://zzyworks.herokuapp.com/',
        'github': 'https://github.com/mattzteh/ZZY-WORKS',
        'description': '',
        'img': images[0]
    },
    'dinoTyper': {
        'id': 2,
        'title': 'Dino Typer',
        'stack': ['JavaScript, jQuery'],
        'live': 'https://mattzteh.github.io/DinoTyper/',
        'github': 'https://github.com/mattzteh/DinoTyper',
        'description': '',
        'img': images[1]
    },
    'gameBuddy': {
        'id': 3,
        'title': 'GameBuddy',
        'stack': ['MongoDB', 'Express.js', 'React.js', 'Next.js'],
        'live': 'https://gamebuddy-app.herokuapp.com/',
        'github': 'https://github.com/killacan/gameBuddy',
        'description': '',
        'img': images[2]
    }
}

export default ObjVals(projects);
