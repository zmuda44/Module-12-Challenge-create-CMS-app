const express = require('express');
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
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

app.use()

pool.query('SELECT * FROM departments', (err, res) => {
  if(!err) {
    console.log(res.rows);
  }
});


