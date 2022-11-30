// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project title',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'location',
        message: 'Where are you located?'
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(`Hello, nice to meet you ${answers.name}. I here the weather nice in ${answers.location}.`);
  })
}

// Function call to initialize app
init();


