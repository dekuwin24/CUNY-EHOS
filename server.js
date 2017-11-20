/*
MAIN BACKEND SERVER FILE
*/

// Declare our dependencies
const express = require('express'); // Framework to act as a REST API
const app = express(); // Initialize an express instance
const router = express.Router(); // Create our router
const mongoose = require('mongoose'); // Node module to help us with the MongoDB object modeling
const config = require('./config/database');
const path = require('path'); // Needed for routing
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser'); // node plugin to help parse response body
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

/* Our middleware*/
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// Connect to our front end now
app.use(express.static(__dirname + '/client/dist/')); // Allow access to the dist folder, where the index file is stored
app.use('/authentication', authentication);
// We configure our route so that we always redirect to our server page
app.get('*', (request,response,next) =>{
  response.sendFile(path.join(__dirname + '/client/dist/index.html')); // Fully connect our angular app from here
});

app.listen(3000, ()=>{
  console.log("Server started on port 3000");
});
