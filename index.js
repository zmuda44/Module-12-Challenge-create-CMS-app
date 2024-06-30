const fs = require("fs")
const inquirer = require("inquirer")
const Query = require('./queries/queries')
const newQuery = new Query
console.log(newQuery.runQuery)

const input = [
  {
    type: 'list',
      message: 'What would you like to do?',
      name: 'mainMenu',
      choices: [
          { value: 'View All Employees' },   
          { value: 'Add Employee' },  
          { value: 'Update Employee Role' },  
          { value: 'View all Roles' },               
          { value: 'Add Role' },               
          { value: 'View all Departments' },               
          { value: 'Add Department' },               
      ]
  },
];



// Function to initialize app
function init() {
  inquirer
  .prompt(input)  
  .then((data, err) => { 
    if (err) {
      throw new Error("No menu item chosen")
    } 
    // Query.runQuery()
  }
  );
}

init();

// function addEmployee () {
//   inquirer
//   .prompt(input)
//   .then(data, err) => {
//     if (err) {
//       throw new Error("No input given")
//     }
//     getRoutes(data)
//   }
// }

// Function call to initialize app

// function runQuery () {
//   pool.query('SELECT * FROM department', (err, { rows }) => {
//     if(!err) {
//       console.table(rows);
//     }
//     else {
//       console.log(error)
//     }  
//     init()  
//   });
// }
