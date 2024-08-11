const fs = require("fs")
const inquirer = require("inquirer")





// const updateEmployeeMenu = {
//   type: 'input'
// }

const addRoleMenu = {
  type: 'input',
  message: 'Enter Employee Role',
  name: 'employeeRole'
}

const addDeptMenu = {
  type: 'input',
  message: 'Enter Deparment',
  name: 'department'
}


// function queryFunction (data) {
//   if(data.mainMenu == 'Add Employee') {
//     addEmployee()
//   }
  
//   console.log(data.mainMenu)

// }

module.exports = queryFunction