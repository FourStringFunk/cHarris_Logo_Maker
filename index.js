// Define the required npm extensions
const inquirer = require('inquirer'); // import inquirer node package
const fs = require('fs'); // import file system module
const path = require('path'); // import path package
const examples = path.join(__dirname, 'examples');

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
                type: 'list',
                name: 'shape',
                message: 'What shape would you like to use?',
                choices: ['Circle', 'Rectangle', 'Square', 'Triangle']
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
            
            // Write the function for applying the answers to the appropriate SVG template
            let markup;
            // Write the code for applying the appropriate SVG markup
            switch (shape) {
                case 'Circle':
                    markup = 
                    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
                        <style>.textStyle {font: bold 30px sans-serif }</style>
                        <circle cx="150" cy="150" r="50" fill="${shapeColor}" />
                        <text x="50%" y="53%" text-anchor="middle" class="textStyle" fill="${textColor}">${text}</text>
                    </svg>`;
                    break;
            }

            fs.writeFile(`examples/${fileName}.svg`, markup, err => {
                if (err) {
                    console.error('There was an error saving the file', err);
                } else {
                    console.log('The file was successfully created');
                }
            });
        })
}





// Write the code to create the SVG file using the SVG name answer

// Write the code to run the application
logoCreation();



