const fs = require("fs")
const inquirer = require("inquirer")
const { Pool } = require('pg');


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

const pool = new Pool(
  {
    user: 'postgres',
    password: 'postgreg',
    host: 'localhost',
    database: 'cms_db'
  },
  console.log(`Connected to the cms_db database.`)
)



pool.connect();

// const sql = 'SELECT * FROM  department';

// pool.query('SELECT * FROM department', function (err, { rows }) {
//   if(err) {

//   }
//   console.log(rows);
// });

pool.query('SELECT * FROM department', (err, { rows }) => {
  if(!err) {
    console.log(rows);
  }
  else {
    console.log(error)
  }    
});

// pool.query()

//Function to initialize app
// function init() {
//   inquirer
//   .prompt(input)  
//   .then((data, err) => { 
//     if (err) {
//       throw new Error("No menu item chosen")
//     } 
//     console.log(data)
//   }
//   );
// }

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
// init();