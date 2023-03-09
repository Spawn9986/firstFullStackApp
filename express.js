// =========== Require These ==============
const express = require('express');
const { Pool } = require('pg');

// =========== Global Variables ===========
const app = express();
const PORT = process.env.PORT || 8000;
 
const pool = new Pool({
  host: 'postgres-db',
  user: 'postgres',
  password: 'password',
  port: '5432',
  database: 'people-filter',
})

app.use(express.json());

// start developing our routing
// get all from tables

// test request to verify this file is working
app.get("/test", (req, res, next) => {
  res.send('Programming is awesome! This page works!');
})

app.get('/', (req, res) => {
    pool.query ('SELECT * FROM people', (err, result) => {
      if (err) {
        return res.send(err);
      }
      let rows = result.rows
      res.send(rows);
    })
  })

// Get the server to start listening for requests and have some error handeling
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})