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


function viewAllDepartments(init) {
  pool.query('SELECT * FROM department', (err, { rows }) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows);
    init();
  });
}

function viewAllRoles(init) {
  const query = `SELECT * FROM role`
  pool.query(query, (err, { rows }) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows);
    init();
  });
}




module.exports = { viewAllDepartments, viewAllRoles }

