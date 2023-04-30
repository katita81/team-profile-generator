const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// ask the user for employeer info name, employee ID, email address
const employees = [];
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter employees name: '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee id: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employees email address: '
        },
        {
            type: 'input',
            name: 'role',
            message: 'Enter employees role: '
        }

    ])

};
//Generates index.html file first loops through the elements from the employee array.
//then creates the div html for each employee and joins them separated by new lines
const generateHTML = () => {
    var employeeDivs = [];
    for (var i = 0; i < employees.length; i++) {
        var employee = employees[i];
        var content;
        if (employee.getRole() == 'Engineer') {
            content = `<div id="employee" class="grid-item">
            <div id="details" >
                <div class="blue" id="name">${employee.name}</div>
                <div class="blue" id="role">Engineer</div>
                <p id="id">ID: ${employee.id}</p>
                <p id="email">Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                <p id="github">Github: <a href="${employee.github}">${employee.github}</a></p>    
            </div></div>`;
        } else if (employee.getRole() == 'Intern') {
            content = `<div id="employee" class="grid-item">
            <div id="details" >
                <div class="blue" id="name">${employee.name}</div>
                <div class="blue" id="role">Intern</div>
                <p id="id">ID: ${employee.id}</p>
                <p id="email">Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                <p id="school">School: ${employee.school}</p>
            </div></div>`;
        } else if (employee.getRole() == 'Manager') {
            content = `<div id="employee" class="grid-item">
            <div id="details" >
                <div class="blue" id="name">${employee.name}</div>
                <div class="blue" id="role">Manager</div>
                <p id="id">ID: ${employee.id}</p>
                <p id="email">Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                <p id="officeN">Office Number: ${employee.officeNumber}</p>
            </div></div>`;
        }

        employeeDivs.push(content);
    }
    
    return `<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="style.css">
  <title>My Team</title>
  <link rel="stylesheet" href="./style.css" />
</head>

<body>

  <header>
    <div id="header">
        My team
    </div>
  </header>

  <main  class="grid-container">
    ${employeeDivs.join('\n')}
  </main>  
</body>
</html>`
};
//asks user whether to continue creating employees or stop
function continueOrStop() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'cont',
            message: 'Do you want to add another employee? '
        }
    ])
    .then(({ cont }) => {
        if (cont === 'y') {
            teamFileGen();
        } else if (cont === 'n') {
            writeFile('dist/index.html', generateHTML());
        } else {
            console.log('Please enter y or n');
            continueOrStop();
        }
    });
}
//prompts the user for the relevant information according to the role
//and creates the respective object  
function teamFileGen() {
    promptUser().then(({ name, id, email, role }) => {
        if (role == 'manager') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'Enter office number: '
                }
            ])
            .then(({officeNumber}) => {
                const emp = new Manager(name, id, email, officeNumber);

                // put that manager into the employees array
                employees.push(emp);

                continueOrStop();
            });
        }
        if (role == 'engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: 'Enter gitHub url: '
                }
            ])
                .then(({ github }) => {
                    const emp = new Engineer(name, id, email, github);

                    // put that manager into the employees array
                    employees.push(emp);

                    continueOrStop();
                });
        }
        if (role == 'intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: 'Enter name of the school: '
                }
            ])
                .then(({ school }) => {
                    const emp = new Intern(name, id, email, school);

                    // put that manager into the employees array
                    employees.push(emp);

                    continueOrStop();
                });
        }
    });
}

module.exports = teamFileGen;











