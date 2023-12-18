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

        const catagories = ['Description', 'Table of Contents', 'Instillation', 'Usage', 'Contributions', 'Tests']
        const contents = ['instillation', 'usage', 'contributions', 'tests']
        function writeToFile() {
            // fs.appendFile('./README.md', `# ${questions.fileName} \n ## Description \n ${questions.description} \n`)
            for (let i = 2; i <= questions.length; i++) {
                //    fs.appendFile('./README.md',`## ${contents[i-2]} \n ${questions[i]}`)
                console.log(i - 2)
            }
            // //  ## Description \n
            // // ${questions.description} \n ## Table of Contents \n ## Installation \n ## Usage \n ## Contributions \n ## Tests)
        }

    });








// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
