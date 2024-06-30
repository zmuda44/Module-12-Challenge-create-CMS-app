const { Pool } = require('pg');

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
  addEmployee () {
    return this.params
  }
}

// const newQuery = new Query
// console.log(newQuery.runQuery())

module.exports = Query