// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input  
//email, username, title, description, Installation, usage, Contributing, tests, questions
const catagories = ['Instillation', 'Usage', 'Contributions', 'Tests']
const contents = ['instillation', 'usage', 'contributions', 'tests']

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter your GitHub username.',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Enter your Email.',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Enter the title of your project.',
            name: 'title',
        },
        {
            type: 'list',
            message: 'Choose a license',
            choices: ['Academic_Free_License_v3', 'MIT', 'Eclipse_Public_License_2', 'GNU_General_Public_License_v3', 'Mozilla_Public_License_2'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'Type a description of your Project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Type installation instructions.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Type how to use your project.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Type how can others contribute.',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Type how to test your project.',
            name: 'tests',
        },
    ]).then((userAnswers) => {
        const questions = userAnswers;
        writeToFile()
        


        function writeToFile() {
            // fs.appendFile('./README.md', `# ${questions.fileName} \n ## Description \n ${questions.description} \n`)
            fs.writeFile('README.md',`# ${questions.title}
${questions.description}

![license](https://img.shields.io/badge/License-${questions.license}-purple)

## Table of Contents

${tableOfContents()}

## Installation 

${questions.installation}

## Usage 

${questions.usage}

## Contributions 

${questions.contributing}

## Tests 

${questions.tests}

## Questions

If you have further questions my contacts are:

Email: [email](mailto:${questions.email})

GitHub: [GitHub](https://github.com/${questions.username})`,()=>{
    console.log('The deed is done.')
})
            
        }
        function tableOfContents(){
            const text = []
            for (let i = 0;i < catagories.length; i++ ) {
                   text.push(`- [${catagories[i]}](#${contents[i]})`)
            }
            return text.join('\n')
        }

    });








// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
