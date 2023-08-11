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
                        <circle cx="200" cy="200" r="100" fill="${shapeColor}" />
                        <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>
                    </svg>`;
                    break;
            }

            fs.writeFile(`${fileName}.svg`, markup, err => {
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



