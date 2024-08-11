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
    console.table(rows)
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

function viewAllRoles(init) {
  const query = `
    SELECT 
      role.id, 
      role.title, 
      role.salary, 
      department.name AS department
    FROM role 
    JOIN department ON role.department = department.id
  `;
  pool.query(query, (err, { rows }) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows);
    init();
  });
}

function addRole(data, init) {
  pool.query('INSERT INTO role (title, salary, department) VALUES ($1, $2, $3)', [data.title, data.salary, data.department], (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Added ${data.title} to database`);
    init();
  });
}

function viewAllEmployees(init) {
  const query = `
  SELECT 
    employee.first_name, 
    employee.last_name, 
    role.title, 
    role.salary
  FROM 
    employee
  JOIN
    role ON employee.role_id = role.id
  `;
  pool.query(query, (err, { rows }) => {  
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows);
    init();
  });
}

function updateEmployeeRole(data, init) {
  console.log(data)
  pool.query(`UPDATE employee SET role_id = $1 WHERE id = $2`, [data.role_id, data.id], (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Updated employee role`);
    init();
  });
}

function addEmployee(data, init) {
  const {first_name, last_name, role_id, manager_id} = data;
  pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id], (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Added ${first_name} ${last_name} to database`);
    init();
  });
}

module.exports = { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole }

