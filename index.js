const fs = require("fs")
const inquirer = require("inquirer")
const server = require('./server.js')

const input = [
  {
    type: 'list',
      message: 'Choose the shape of your logo.',
      name: 'menu',
      choices: [
          { value: 'View All Employees' },   
          { value: 'Add Employee' },  
          { value: 'Update Employee Role' },  
          { value: 'View all Roles' },               
          { value: 'Add Role' },               
          { value: 'View all Departments' },               
          { value: 'Add Department' },               
          { value: '' },               
      ]
  },
];



//Function to initialize app
function init() {
  inquirer
  .prompt(input)  
  .then((data, err) => { 
    if (err) {
      throw new Error("No menu item chosen")
    } 
    getRoutes(data)
  }
  );
}

function addEmployee () {
  inquirer
  .prompt(input)
  .then(data, err) => {
    if (err) {
      throw new Error("No input given")
    }
    getRoutes(data)
  }
}

// Function call to initialize app
init();