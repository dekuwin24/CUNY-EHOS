const User = require('../models/user');
const jwt = require('jsonwebtoken');
const dbConfig = require('../config/database');
// We want to export the router api

module.exports = (router) => {
  // Our get request to check if the email that was entered on the front end is already in use.
  router.get('/getRegistrations', (request,response) => {
    User.find({ needsApproval: true },'firstName lastName email phoneNumber privilege', (err,user) => {
      if (err) {
        // Connection error was found
        response.json({success: false, message: err});
      }
      else {
        if (user) {
          response.json({success: true, users: user});
        }
        else {
          response.json({success: false, message: "No new registrations."});
        }
      }
    });
  });
  return router;
}
