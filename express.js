// =========== Require These ==============
const express = require('express');

// =========== Global Variables ===========
const app = express();
const PORT = 3056

// start developing our routing
app.get('/', (req, res) => {
    res.send('hello world')
  })

// Get the server to start listening for requests and have some error handeling
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})