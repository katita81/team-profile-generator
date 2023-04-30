const teamFileGen = require('./src/teamFileGen.js');
const inquirer = require('inquirer');


//Create a function to initialize app
const init = () => {
    teamFileGen();
}

// Function call to initialize app
init();
