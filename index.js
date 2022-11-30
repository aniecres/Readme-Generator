// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a short description explaining your project.'
      },
      {
        type: 'input',
        name: 'table',
        message: 'If you choose to, write a Table of Contents'
      },
      {
        type: 'input',
        name: 'instillation',
        message: 'What is included in the Installation?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Exlplain the Usage for your project.'
      },
      {
        type: 'input',
        name: 'licesne',
        message: 'What license did you use for this project?'
      },
      {
        type: 'input',
        name: 'Contributers',
        message: 'List any contributers included in this project.'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Having you done any testings for your projects? If so, include your tests.'
      }
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


