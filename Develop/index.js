// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const descriptionQuestions = ['What is the name of your project?', 'What was your motivation?', 'Why did you build this project?', 'What problem does it solve?', 'What did you learn?', 'What makes your project stand out?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, data, err => {
        if(err){
            console.log(err);
            return;
        }
    })
}



function promptHandler() {
    return inquirer.prompt([
        {
            name: 'idk',
            message: 'enter test word'
        }
    ]);
    //'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'
    //const [name, motivation, why, problem, learn, stand] = descriptionQuestions;
}
function description(){
    inquirer.prompt([{
        name: 'title',
        message: name,
        type: 'input'
    }, {
        name: 'motivation',
        message: motivation,
        type: 'input'
    }, {
        name: 'why',
        message: why,
        type: 'input'
    }, {
        name: 'problem',
        message: problem,
        type: 'input'
    }, {
        name: 'learn',
        message: learn,
        type: 'input'
    }, {
        name: 'stand',
        message: stand,
        type: 'input'
    }])
        .then(answers => {
            let data = generateMarkdown(answers);
            writeToFile('README.md', data);
        });
}

// TODO: Create a function to initialize app
function init() {
    
    //prompts user for what modules they want in the README file
    inquirer.prompt([
        {
            name: 'selection',
            type: 'checkbox',
            message: 'Choose additional README sections',
            choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
        }
    ])
    .then();
    
}

// Function call to initialize app
init();
