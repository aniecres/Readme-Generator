// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdownFile = require('./utils/generateMarkdown.js');

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
        message: 'If you choose to, write a Table of Contents.'
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
        message: 'Have you done any testings for your projects? If so, include your tests.'
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the best email to reach you?'
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
    console.log('You did it! Here is your README.md!')
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((data) => {
    console.log(data);
    let fileName = generateMarkdownFile(data);
    writeToFile(fileName);
  })
}

// Function call to initialize app
init();

//  To expoert the questions
module.exports = questions
