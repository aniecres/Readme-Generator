// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdownFile = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Write a short description explaining your project.'
      },
      {
        type: 'input',
        name: 'Table',
        message: 'If you choose to, write a Table of Contents.'
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'What is included in the Installation?'
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Exlplain the Usage for your project.'
      },
      {
        type: 'input',
        name: 'License',
        message: 'What license did you use for this project?'
      },
      {
        type: 'input',
        name: 'Contributors',
        message: 'List any contributers included in this project.'
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'Have you done any testings for your projects? If so, include your tests.'
      },
      {
        type: 'input',
        name: 'Github',
        message: 'What is your Github username?'
      },
      {
        type: 'input',
        name: 'Email',
        message: 'What is the best email to reach you?'
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('You did it! Here is your README.md!', data)
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(data) {
    console.log(data);
    const answers = generateMarkdownFile(data);
    writeToFile('ExampleREADME.MD', answers);
})
}

// Function call to initialize app
init();

//  To expoert the questions
module.exports = questions
