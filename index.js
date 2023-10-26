// TODO: Include packages needed for this application
const fs = require('fs');
const { prompt } = require('inquirer');

// TODO: Create an array of questions for user input
const { questions } = require('./questions.js');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    prompt(questions).then((answers) => {
        let output = '';

        if (answers['License'] == 'MIT') {
            output += '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        }
        else if (answers['License'] == 'GPL') {
            output += '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        }
        output += `\r\n`;
        output += `\r\n`;
        
        output += `## ${answers['Project title']}`;
        output += `\r\n`;
        output += `\r\n`;
        output += `## Description`;
        output += `\r\n`;
        output += answers['Description'];
        output += `\r\n`;
        output += `\r\n`;
        output += `## Table of contents`;
        output += `\r\n`;
        output += `[Installation](#installation)`;
        output += `\r\n`;
        output += `[Usage](#usage)`;
        output += `\r\n`;
        output += `[Contributing](#contributing)`;
        output += `\r\n`;
        output += `[Tests](#tests)`;
        output += `\r\n`;
        output += `[Questions](#questions)`;
        output += `\r\n`;
        output += `\r\n`;
        output += `#Installation`;
        output += `\r\n`;
        output += answers['Installation'];
        output += `\r\n`;
        output += `\r\n`;
        output += `#Usage`;
        output += `\r\n`;
        output += answers['Usage'];
        output += `\r\n`;
        output += `\r\n`;
        output += `#Contributing`;
        output += `\r\n`;
        output += answers['Contributing'];
        output += `\r\n`;
        output += `\r\n`;
        output += `#Tests`;
        output += `\r\n`;
        output += answers['Tests'];
        output += `\r\n`;
        output += `\r\n`;
        output += `#License`;
        output += `\r\n`;

        if (answers['License'] == 'MIT') {

        }
        else if (answers['License'] == 'GPL') {

        }

        output += `#Questions`;
        output += `\r\n`;
        output += answers['Questions'];
     



        writeToFile("README2.md", output);
    });
}

// Function call to initialize app
init();
