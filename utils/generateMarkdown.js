const index = require('../index.js')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let yourLicense  = '';
  if (license === 'MIT') {
    yourLicense = '![License MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (license === 'none') {
    yourLicense = '';
  }

  return yourLicense;

  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'MIT') {
    licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (license === 'GPLv3') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  } else if (license === 'none') {
    licenseLink = '';
  }
  return licenseLink;
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = ''; 
  if (license === 'none') {
    section = '';
  } else {
    section = `license : ${license}`
  }
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdownFile(data) {
  const answers = JSON.parse(data)
  return `ExampleREADME.MD

# Title 
${answers.title}

## Description 
${answers.description}

## Table of Contents
${answers.table}

## Installation 
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributors
${answers.contributors}

## Tests
${answers.tests}

## Questions
If you have any questions, reach out!
${answers.github}
${answers.email}
`;
}

module.exports = generateMarkdownFile;
