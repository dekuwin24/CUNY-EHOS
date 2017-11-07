/*
MAIN BACKEND SERVER FILE
*/

// Declare our dependencies
const express = require('express'); // Framework to act as a REST API
const app = express(); // Initialize an express instance
const mongoose = require('mongoose'); // Node module to help us with the MongoDB object modeling
const config = require('./config/database');
const path = require('path'); // Needed for routing

mongoose.Promise = global.Promise; // Config declaration for mongoose
// Our method that attempts to create a connection to our database
mongoose.connect(config.uri, config.options, (err) =>{
  if (err) {
    console.log("error ....\n - " + err);
  }
  else {
    console.log("connected to db: " + config.db);
  }
});

// Connect to our front end now
app.use(express.static(__dirname + '/client/dist/')); // Linking

// We configure our route so that we always redirect to our server page
app.get('*', (request,response,next) =>{
  response.sendFile(path.join(__dirname + '/client/dist/index.html')); // Fully connect our angular app from here
});

app.listen(3000, ()=>{
  console.log("Server started on port 3000");
});
