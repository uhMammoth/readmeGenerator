// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const descriptionQuestions = ['What is the name of your project?', 'What was your motivation?', 'Why did you build this project?', 'What problem does it solve?', 'What did you learn?', 'What makes your project stand out?'];
const moduleQuestions = ['Select which licenses you would ike to use for this project', 'How can you install this application?', 'How can this application be used?', 'How can you contribute to this project?', 'What tests can you run for this application?', 'Enter your github username:', 'Enter an email for users to direct questions:'];
const licenses = ['Apache','GNU', 'ISC', 'MIT', 'Mozilla', 'Open Data Commons', 'Perl'];

const [name, motivation, why, problem, learn, stand] = descriptionQuestions;
const [license, install, usage, contribute, test, github, email] = moduleQuestions;

const promptQuestions = [{
    name: 'title',
    message: name,
    type: 'input'
},{
    name: 'license',
    message: license,
    type: 'checkbox',
    choices: licenses
},{
    name: 'motivation',
    message: motivation,
    type: 'input'
},{
    name: 'why',
    message: why,
    type: 'input'
},{
    name: 'problem',
    message: problem,
    type: 'input'
},{
    name: 'learn',
    message: learn,
    type: 'input'
},{
    name: 'stand',
    message: stand,
    type: 'input'
},{
    name: 'install',
    message: install,
    type: 'input'
},{
    name: 'usage',
    message: usage,
    type: 'input'
},{
    name: 'contribute',
    message: contribute,
    type: 'input'
},{
    name: 'test',
    message: test,
    type: 'input'
},{
    name: 'github',
    message: github,
    type: 'input'
},{
    name: 'email',
    message: email,
    type: 'input',
    validate: function(email)
        {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
}];
// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, err => {
        if(err){
            console.log(err);
            return;
        }
    })
}

// TODO: Create a function to initialize app
function init() {    
    inquirer.prompt(promptQuestions).then(answers => {        
            let data = generateMarkdown(answers);
            writeToFile(data);
        });
}

// Function call to initialize app
init();
