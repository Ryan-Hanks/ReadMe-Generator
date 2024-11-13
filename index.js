
const fs=require('fs');
const generateMarkdown=require('./utils/generateMarkdown.js');
const inquirer=require('inquirer');

const questions = [
    'What is your title for the project?',
    'Give your project a short description:',
    'How do you install it?',
    'How do you use the program?',
    'Which license are you using?',
    'Provide your email:',
    'What is your username on Github?',
];

const licenses = [
    'MIT',
    'Apache 2.0',
    'No License',
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const content = generateMarkdown(data);

    fs.writeFile('README.md', content, (error) => 
        error ? console.log(error) : console.log('README.md successfully created.')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0]
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1]
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[2]
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3]
            },
            {
                type: 'list',
                name: 'license',
                message: questions[4],
                choices: licenses
            },
            {
                type: 'input',
                name: 'email',
                message: questions[5]
            },
            {
                type: 'input',
                name: 'github',
                message: questions[6]
            },
        ])
        .then((data) => {
            writeToFile(data);
        })
}

// Function call to initialize app
init();
