const inquirer = require("inquirer");
const manager = require("./Manager");
const engineer = require("./Engineer");
const intern = require("./Intern");


class Employee {
    constructor(name, id, email) {
        this.name = name ;
        this.id = id;
        this.email = email;  
    }
}
module.exports = Employee;

getName()

getId()

getEmail()

getRole()
let myEmployee = new Employee('');