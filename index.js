const fs = require("fs")
const inquirer = require("inquirer")
const sqlQuery = require('./queries/sql-queries')
// const queryFunction = require('./queries/query-function')

// when you run newQuery.query() it gives the proper object but gives undefined before it
// may have something to do with console.log()? when i did return it just returned the value


const mainMenu = [
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

const addEmployeeMenu = {
  type: 'input',
  message: 'Enter Employee Name',
  name: 'employeeName'
}

function addEmployee () {
  inquirer
  .prompt(addEmployeeMenu)
  .then((data, err) => {
    if (err) {
      console.log(err)
    }
    const query =  new sqlQuery(data)  
    console.log(query.addEmployee())  
  })
 
}

// Function to initialize app
function init() {
  inquirer
  .prompt(mainMenu)  
  .then((data, err) => { 
    if (err) {
      throw new Error("No menu item chosen")
    }
    if(data.mainMenu == 'Add Employee') {
      addEmployee()
    }
  }) 
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
