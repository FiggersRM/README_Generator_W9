// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generator = require('./utils/generateMarkdown');
let data;
fileName = "createdREADME";

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", "Please enter a description of your project", "Please describe the installation of your application", "Describe the usage of your application", "Which license are you using for your application?", "Please describe any contribution guidelines for your application", "Please enter any testing instructions you would like to include", "What is your GitHub username?", "Please provide an email to reach out for additional questions"];

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {
    inquirer
.prompt ([
    {
        type: 'input',
        message: questions[0],
        name: 'title',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'description',
    },
    {
        type: 'input',
        message: questions[2],
        name: 'installation',
    },
    {
        type: 'input',
        message: questions[3],
        name: 'usage',
    },
    {
        type: 'list',
        message: questions[4],
        choices: ['No License', 'Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'Creative Commons CC0', 'Creative Commons Attribution 4.0 International', 'Creative Commons Attribution-ShareAlike 4.0 International', 'Creative Commons Attribution-NonCommercial 4.0 International', 'Creative Commons Attribution-NoDerivates 4.0 International', 'Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International', 'Creative Commons Attribution-NonCommercial-NoDerivates 4.0 International', 'Eclipse Public License 1.0', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LPGL v3', 'GNU FDL v1.3', 'The Hippocratic License 3.0', 'ISC License', 'MIT License', 'Mozilla Public License 2.0', 'Open Data Commons Attribution License (BY)', 'Open Data Commons Open Database License (ODbl)', 'Open Data Commons Public Domain Dedication and License (PDDL)', 'Perl Artistic License 2.0', 'SIL Open Font License 1.1', 'The Unlicense', 'Zlib/libpng License'],
        name: 'license',
    },
    {
        type: 'input',
        message: questions[5],
        name: 'contributors',
    },
    {
        type: 'input',
        message: questions[6],
        name: 'test',
    },
    {
        type: 'input',
        message: questions[7],
        name: 'username',
    },
    {
        type: 'input',
        message: questions[8],
        name: 'email',
    }
])
    .then((response) => {
        data = response;
        function writeToFile(fileName, data) {
            const mdString = generator.generateMarkdown(data);
            console.log(mdString);
            fs.writeFile(`${fileName}.md`, mdString, (err) =>
            err ? console.error(err) : console.log('Success!'))
        }
        writeToFile(fileName, data);
    });
}

// Function call to initialize app
init();
