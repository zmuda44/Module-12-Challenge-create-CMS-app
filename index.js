const fs = require("fs")
const inquirer = require("inquirer")
const {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole
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
const addRoleMenu = [
  {
    type: "input",
    message: "What is the name of the role?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the salary of the role?",
    name: "salary",
  },
  {
    type: 'list',
      message: 'What department',
      name: 'department',
      choices: [
          { name: 'Shipping', value: 1 },   
          { name: 'Receiving', value: 2 },  
          { name: 'Accounting', value: 3 },  
          { name: 'Marketing', value: 4 },          
      ]
  },
]
const addEmployeeMenu = [
  {
    type: "input",
    message: "What is the employee's first name?",
    name: "first_name",
  },
  {
    type: "input",
    message: "What is the employee's last name?",
    name: "last_name",
  },
  {
    type: 'list',
      message: "What is the employee's role?",
      name: 'role_id',
      choices: [
          { name: 'Foreman', value: 1 },   
          { name: 'Stocker', value: 2 },  
          { name: 'Bookkeeper', value: 3 },  
          { name: 'Sales Manager', value: 4 },          
      ]
  },
  {
    type: 'list',
      message: "Who is the employee's manager?",
      name: 'manager_id',
      choices: [
          { name: 'Greg Bailey', value: 1 },   
          { name: 'Todd Etta', value: 2 },  
          { name: 'Alvin Nikolia', value: 3 },  
          { name: 'Courtney Raymond', value: 4 },          
      ]
  },
]
const updateEmployeeRoleMenu = [
  {
    type: 'list',
      message: "Which employee's role do you want to update?",
      name: 'id',
      choices: [
        { name: 'Greg Bailey', value: 1 },   
        { name: 'Todd Etta', value: 2 },  
        { name: 'Alvin Nikolia', value: 3 },  
        { name: 'Courtney Raymond', value: 4 },          
      ]
  },
  {
    type: 'list',
      message: "Which role do you want to assign the selected employee?",
      name: 'role_id',
      choices: [
          { name: 'Foreman', value: 1 },   
          { name: 'Stocker', value: 2 },  
          { name: 'Bookkeeper', value: 3 },  
          { name: 'Sales Manager', value: 4 },          
      ]
  }
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
      inquirer
      .prompt(addEmployeeMenu)
      .then((data, err) => { 
        if (err) {
          throw new Error("No menu item chosen")
        }
        addEmployee(data, init)
      })
    }
    if(data.mainMenu == 'Update Employee Role') {
      inquirer
      .prompt(updateEmployeeRoleMenu)
      .then((data, err) => { 
        if (err) {
          throw new Error("No menu item chosen")
        }
        updateEmployeeRole(data, init)
      })
    }
    if(data.mainMenu == 'View All Roles') {
      viewAllRoles(init)
    }
    if(data.mainMenu == 'Add Role') {
      inquirer
      .prompt(addRoleMenu)
      .then((data, err) => { 
        if (err) {
          throw new Error("No menu item chosen")
        }
        addRole(data, init)
      })
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
