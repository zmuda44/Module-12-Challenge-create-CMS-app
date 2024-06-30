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

// class Query {
//   constructor(query) {
//     this.query = "say something";
//   }
//   runQuery () {
//     pool.query('SELECT * FROM departments', (err, { rows }) => {
//       if(err) {
//         console.log(err);
//       }      
//       console.log(rows)      
//     });

//   }
// }

const newQuery = new Query
console.log(newQuery.runQuery())

// module.exports = Query