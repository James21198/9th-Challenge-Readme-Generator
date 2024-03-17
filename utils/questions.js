const questions = [
    {
        type: 'input',
        name: 'title',
        question: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        question: 'how would you describe your project?',
    },
    {
        type: 'input',
        name: 'installation',
        question: 'What do you need to do to install this project?',
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'test',
        question: 'How do you test your project?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        question: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'contribution',
        question: 'Has any other users contributed to this project, if so please list them',
    },
    {
        type: 'input',
        name: 'github',
        question: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        question: 'What is your email address?',
    },
]

module.exports = questions;