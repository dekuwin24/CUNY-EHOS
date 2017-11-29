const User = require('../models/user');

// We want to export the router api

module.exports = (router) => {
  // Our post request to register a user, will send a JSON object containing
  // request.body.user, request.body.email, request.body.password

  router.post('/register', (request, response) =>{
    if (!request.body.email) {
      response.json({success: false, message: 'Email error'});
    }
    else if (!request.body.password) {
      response.json({success: false, message: 'Password error'});
    }
    else{
      let user = new User({
        email: request.body.email,
        phoneNumber: request.body.phoneNumber,
        password: request.body.password,
        privilage: 1
      });
      user.save((error) =>{
        if (error) {
          if (error.code === 11000) {
            console.log(error);
            response.json({success: false, message: 'Username or email already exists'});
          }
          else{
            if (error.errors.email) {
              response.json({success: false, message: error.errors.email.message});
            }
            else if (error.errors.password) {
              response.json({success: false, message: error.errors.password.message});
            }
            else {
              console.log(error);
              response.json({success: false, message: 'User could not be saved'});
            }
          }
        }
        else{
          response.json({success: true, message: 'User was saved'});
        }
      });
    }
  });

  return router;
}
