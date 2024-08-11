const { Pool } = require('pg');
const Init = require('../index')

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


function viewAllDepartments () {
  pool.query('SELECT * FROM department', (err, { rows }) => {

    if(err) {
      console.log(err);
      return
    }      
    else {
      // why can't i use return here. if i console.table on Query.getDepartments() in index.js i get undefined.
      console.table(rows) 
      init()       
    }  
  });
}





function addEmployee () {
// pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id)
//   VALUES
//     (${firstName}) ', (err, { rows }) => {

//   if(err) {
//     console.log(err);
//     return
//   }      
//   else {
//     // why can't i use return here. if i console.table on Query.getDepartments() in index.js i get undefined.
//     console.table(rows)        
//   }  
}


// const newQuery = new Query
// console.log(newQuery.runQuery())

module.exports = viewAllDepartments






// class Add {
//   constructor(params) {
//     this.params = params;
//   }
//   getDepartments () {
//     pool.query('SELECT * FROM department', (err, { rows }) => {

//       if(err) {
//         console.log(err);
//         return
//       }      
//       else {
//         // why can't i use return here. if i console.table on Query.getDepartments() in index.js i get undefined.
//         console.table(rows)        
//       }  
//     });
//   }





class Query {
  constructor(params) {
    this.params = params;
  }
  getDepartments () {
    pool.query('SELECT * FROM department', (err, { rows }) => {

      if(err) {
        console.log(err);
        return
      }      
      else {
        // why can't i use return here. if i console.table on Query.getDepartments() in index.js i get undefined.
        console.table(rows)        
      }  
    });
  }
}