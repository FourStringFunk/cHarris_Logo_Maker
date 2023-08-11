// Define the required npm extensions
const inquirer = require('inquirer'); // import inquirer node package
const fs = require('fs'); // import file system module

// Write the function for terminal prompts
function logoCreation() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter the initials of your business (e.g., Sunlit Hills Photography = SHP):'
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter the hex code (e.g. #ffffff;) for your text:'
            },
            {
                type: 'input',
                name: 'shape',
                message: 'What shape would you like to use?',
                choices: ['circle', 'star', 'square', 'triangle']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter the hex code (e.g. #ffffff;) for the color of your chosen shape:',
            },
            {
                type: 'input',
                name: 'fileName',
                message: 'What name would you like to save your file as? (EXCLUDE .svg)'
            }
        ])
        .then(answers => {
            const {text, textColor, shape, shapeColor, fileName} = answers;
        })
}

// Write the function for applying the answers to the appropriate SVG template

// Write the code for applying the appropriate SVG markup

// Write the code to create the SVG file using the SVG name answer

// Write the code to run the application
logoCreation();



