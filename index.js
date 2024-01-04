// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input  
//email, username, title, description, Installation, usage, Contributing, tests, questions
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
            choices: ['Academic Free License v3.0', 'MIT', 'Eclipse Public License 2.0', 'GNU General Public License v3.0', 'Mozilla Public License 2.0'],
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

        const { license } = userAnswers;
        console.log(license);
        writeToFile()
        module.exports = {
            license
        }

        const catagories = ['Instillation', 'Usage', 'Contributions', 'Tests']
        const contents = ['instillation', 'usage', 'contributions', 'tests']
        function writeToFile() {
            // fs.appendFile('./README.md', `# ${questions.fileName} \n ## Description \n ${questions.description} \n`)
            fs.appendFile('README.md',`# ${questions.title}\n ${questions.description} \n ## Table of Contents`,tableOfContents(),
            `## Installation ${questions.installation}\n ## Usage ${questions.usage}\n ## Contributions ${questions.contributing}\n
             ## Tests ${questions.tests}`)
            
            fs.appendFile()
            // //  ## Description \n
            // // 
            //  \n ## Installation \n ## Usage \n ## Contributions \n ## Tests)
        }
        function tableOfContents(){
            for (const category of catagories) {
                   `[${category[i]}]${contents[i]} \n`
                console.log(category[i])
            }
        }

    });








// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
