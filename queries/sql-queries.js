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
  const query = 'SELECT * FROM role JOIN department ON role.department = department.id';
  pool.query(query, (err, { rows }) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows);
    init();
  });
}

function viewAllEmployees(init) {
  const query = 'SELECT * FROM employee JOIN role ON employee.role_id = role.id';
  pool.query(query, (err, { rows }) => {  
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows);
    init();
  });
}

function addDepartment(data, init) {
  console.log(data)
  pool.query('INSERT INTO department (name) VALUES ($1)', [data], (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Added ${data} to database`);
    init();
  });
}
function addRole(data, init) {
  console.log(data)
  pool.query('INSERT INTO role (title, salary, department) VALUES ($1, $2, $3)', [data.title, data.salary, data.department], (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Added ${data.title} to database`);
    init();
  });
}



module.exports = { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRole }

