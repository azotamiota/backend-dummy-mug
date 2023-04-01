// import the required libraries
const express = require("express");
const { Client } = require('pg');
require('dotenv').config()

const client = new Client({
  user: 'azotamiota',
  host: 'localhost',
  database: 'mydatabase',
  password: process.env.PSQL_PWD,
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log('Connected to PostgreSQL database');
  }
});

// create an instance of the express application
const app = express();

// define a GET route for the root endpoint
app.get("/", (req, res) => {
  res.json({ message: "Welcome to mugs backend" });
});

app.get('/mugs', (req, res) => {
  client.query('SELECT * FROM mugs;', (err, result) => {
    if (err) {
      console.error('Error executing query', err.stack);
      res.status(500).json({ error: 'Error executing query' });
    } else {
      res.json(result.rows);
    }
  });
});

process.on('SIGINT', () => {
  client.end(() => {
    console.log('PostgreSQL client disconnected');
    process.exit(0);
  });
});

// start the server on port 3000
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
