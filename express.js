// =========== Require These ==============
const express = require('express');
const { Pool } = require('pg');

// =========== Global Variables ===========
const app = express();
const PORT = process.env.PORT || 8000;

//const holder = $(" #holder ");
/* const pool = new Pool({
  host: 'postgres-db',
  user: 'postgres',
  password: 'password',
  port: '5432',
  database: 'people-filter',
}) */

const pool = new Pool({
  host: 'localhost',
  // when you logged into postgres psql -U (user)
  user: 'postgres',
  password: 'postgrespw',
  port: '32768',
  database: 'people',
})

// ============= client/pool connect ================
pool.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});

// postgres://postgres:postgrespw@localhost:32768 (after the 2 // user:password@host:port (port mapped to local host not the container))

//app.use(express.json());

// start developing our routing
// get all from tables

// test request to verify this file is working
app.get("/test", (req, res) => {
  res.send('Programming is awesome! This page works!');
})

// get all the data from the table
app.get('/', (req, res) => {
  pool.query ('SELECT * FROM people', (err, result) => {
    if (err) {
      return res.send(err);
    }
    let rows = result.rows
    res.send(rows);
  })
})

 //get one column from the table
app.get('/:id', (req, res) => {
const Id = req.params.id;
pool.query (`SELECT * FROM people WHERE id = ${Id}`, (err, result) => {
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



    
