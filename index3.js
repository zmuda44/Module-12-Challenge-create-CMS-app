const inquirer = require("inquirer");
const {
  viewAllDepartments,
} = require('./queries/sql-queries');

// Define the main menu options
const mainMenu = [
  {
    type: 'list',
    message: 'What would you like to do?',
    name: 'mainMenu',
    choices: [
      'View All Departments',
      'View All Roles',
      'View All Employees',
      'Add Department',
      'Add Role',
      'Add Employee',
      'Update Employee Role',
      'Exit'
    ],
  },
];

// Function to initialize app
function init() {
  inquirer.prompt(mainMenu).then((data) => {
    switch (data.mainMenu) {
      case 'View All Departments':
        viewAllDepartments(init);
        break;
      case 'View All Roles':
        viewAllRoles(init);
        break;
      case 'View All Employees':
        viewAllEmployees(init);
        break;
      case 'Add Department':
        addDepartment(init);
        break;
      case 'Add Role':
        addRole(init);
        break;
      case 'Add Employee':
        addEmployee(init);
        break;
      case 'Update Employee Role':
        updateEmployeeRole(init);
        break;
      case 'Exit':
        console.log("Goodbye!");
        process.exit();
      default:
        console.log("Invalid choice, please try again.");
        init(); 
    }
  }).catch((err) => {
    console.error("An error occurred:", err);
  });
}

init();
