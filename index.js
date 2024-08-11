const fs = require("fs")
const inquirer = require("inquirer")
const {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment
} = require('./queries/sql-queries');


const mainMenu = [
  {
    type: 'list',
      message: 'What would you like to do?',
      name: 'mainMenu',
      choices: [
          { value: 'View All Employees' },   
          { value: 'Add Employee' },  
          { value: 'Update Employee Role' },  
          { value: 'View All Roles' },               
          { value: 'Add Role' },               
          { value: 'View All Departments' },               
          { value: 'Add Department' },               
      ]
  },
];

const addDepartmentMenu = [
  {
    type: "input",
    message: "What is the name of your department?",
    name: "textChars",
  },
  {
    type: "input",
    message: "What is the name of your department?",
    name: "textChars",
  },
]


// Function to initialize app
function init() {
  inquirer
  .prompt(mainMenu)  
  .then((data, err) => { 
    if (err) {
      throw new Error("No menu item chosen")
    }
    
    if(data.mainMenu == 'View All Employees') {
      viewAllEmployees(init)
    }
    if(data.mainMenu == 'Add Employee') {
      // viewAllEmployees()
    }

    if(data.mainMenu == 'Update Employee Role') {
      // viewAllEmployees()
    }
    if(data.mainMenu == 'View All Roles') {
      console.log("hit")
      viewAllRoles(init)
    }
    if(data.mainMenu == 'Add Role') {
      // viewAllEmployees()
    }
    if(data.mainMenu == 'View All Departments') {
      viewAllDepartments(init)
    }
    if(data.mainMenu == 'Add Department') {
      inquirer
      .prompt(addDepartmentMenu)
      .then((data, err) => { 
        if (err) {
          throw new Error("No menu item chosen")
        }
        addDepartment(data.textChars, init)
      })
    }
  }) 
}

init();

module.exports = init
