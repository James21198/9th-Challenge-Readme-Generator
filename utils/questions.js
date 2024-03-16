const questions = [
    {
        type: 'input',
        name: 'description',
        question: 'how would you describe your project?',
    },
    {
        type: 'input',
        name: 'learn',
        question: 'What have you learned from this project?',
    },
    {
        type: 'input',
        name: 'motivation',
        question: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'project',
        question: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'problem',
        question: 'What problem does this solve?',
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        question: 'What is your github username?',
    },
]

module.exports = questions;