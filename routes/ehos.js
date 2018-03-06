const User = require('../models/user');
const jwt = require('jsonwebtoken');
const dbConfig = require('../config/database');
// We want to export the router api

module.exports = (router) => {
  // Our get request to check if the email that was entered on the front end is already in use.
  router.get('/getRegistrations', (request,response) => {
    
    User.find({ approved: false },'first last email phone building department room privilege', (err,user) => {
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
  router.post('/setAccount', (request, response) => {
    if (request.body.approve) {
      User.findOneAndUpdate({email: request.body.email}, { approved:true }, (err,email) => {
        if (err) {
          console.log(err);
          response.json({ success: false, message: err });
        }
        else if (!email) {
          //console.log("Email: " + email);
          response.json({ success: false, message: "Email does not exist" });
        }
        else {
          response.status(200).json({ success: true, message: "Approved!" });
        }
      });
    }
    else {
      User.findOneAndRemove({email: request.body.email}, (err,email) => {
        if (err) {
          console.log(err);
          response.json({ success: false, message: err });
        }
        else if(!email){
          response.json({ success: false, message: "Not Found" });
        }
        else {
          response.status(200).json({ success: true, message: "User was deleted" });
        }
      });
    }
  });
  return router;
}
