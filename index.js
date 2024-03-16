const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');

function createFile(markdown) {
    fs.writeFile('readme.md', markdown, (err) => 
        err ? console.log(err) : console.log('Readme file successfully created!')
    );
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            createFile(markdown);
        });
}

init();