const express = require("express");
const { Client } = require('pg');
require('dotenv').config()
const cors = require('cors')
const os = require('os')

const app = express();
app.use(cors())
app.use(express.json())

const client = new Client({
  user: process.env.USER,
  host: process.env.DB_ADDRESS,
  database: 'mug_db',
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
    console.log('\nPostgreSQL client disconnected');
    process.exit(0);
  });
});

const server = app.listen(3000, () => {
  const host = os.networkInterfaces().lo0[0].address
  console.log(`Server started on http://${host}:3000`);
});

