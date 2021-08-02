// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown.js");
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions =[
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your project title?',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
            
          } else {
            console.log("Enter a title for your project!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
            
          } else {
            console.log("Enter your GitHub username!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'emailAddress',
        message: 'Enter your email address.',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
            
          } else {
            console.log("Enter your email address!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of the project',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
            
          } else {
            console.log("Enter a description for your project!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions for the project',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
            
          } else {
            console.log("Enter the installation instructions for your project!")
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information for the project',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
            
          } else {
            console.log("Enter the usage information for your project!")
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license does the project require?',
        choices: ['Apache', 'MIT', 'GPL', 'MPL']
      },
      {
        type: 'input',
        name: 'demo',
        message: 'Enter the file pathway of your demo in assests/demo',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
            
          } else {
            console.log("Enter your file pathway!")
            return false;
          }
        }
      },
    
        ]
// TODO: Create a function to write README file
function writeToFile(readMeContent) {
    fs.writeFile('README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README!')
    )}
// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
  .then(generateMarkdown)
  .then((response)=> {
    writeToFile(response)

  })
