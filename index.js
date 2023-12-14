// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input  
//email, username, title, description, Installation, usage, Contributing, tests, questions
inquirer
    .createPromptModule([
        {
            type:'input',
            message:'What is your GitHub username?',
            name:'username',
        },
        {
            type:'input',
            message:'What is your Email?',
            name:'email',
        },
        {
            type:'input',
            message:'What is the title of your project?',
            name:'title',
        },
        {
            type:'input',
            message:'Type a description of your Project.',
            name:'description',
        },
        {
            type:'input',
            message:'Type installation instructions.',
            name:'installation',
        },
        {
            type:'input',
            message:'Type how to use your project.',
            name:'usage',
        },
        {
            type:'input',
            message:'How can others contribute?',
            name:'contributing',
        },
        {
            type:'input',
            message:'Type how to test your project.',
            name:'tests',
        },
    ]).then(answer)
    
const questions = [...answer];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile('README', `# ${} \n ## Description \n`)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
