//package calls
const inquirer = require('inquirer')
const fs = require('fs')

//Table of contents Items
const catagories = ['Installation', 'Usage', 'Contributions', 'Tests']
const contents = ['installation', 'usage', 'contributions', 'tests']

//inquirer start
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
//writeToFile function call
        writeToFile()


//writeToFile function start
        function writeToFile() {

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

[Email](mailto:${questions.email})

[GitHub](https://github.com/${questions.username})`,()=>{
    console.log('The deed is done')
})
}
//writeToFile function end

//table of Contents function start, it's called in writeToFile
        function tableOfContents(){
            const text = []
            for (let i = 0;i < catagories.length; i++ ) {
                   text.push(`- [${catagories[i]}](#${contents[i]})`)
            }
            return text.join('\n')
        }
//table of Contents function end
    });
//inquirer end