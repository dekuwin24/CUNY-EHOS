const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
/* Let Node see our validator functions */
// Validate email maxLength
let isEmailLength = (email) => {
  // Check if email exists
  if (!email) {
    return false;
  } else {
    // Check password length
    if (email.length < 8 || email.length > 40) {
      return false;
    } else {
      return true; // Return email length as valid
    }
  }
};
// Validate email format
let isValidEmail = (email) => {
  // Check if e-mail exists
  if (!email) {
    return false;
  } else {
    // Regular expression to test for a valid e-mail
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regExp.test(email); // Return regular expression test results (true or false)
  }
};

// Email validator array
const emailValidator = [
  // First Email Validator
  {
    validator: isEmailLength,
    message: 'E-mail must be at least 5 characters but no more than 40'
  },
  // Second Email Validator
  {
    validator: isValidEmail,
    message: 'Must be a valid e-mail'
  }
];

// Validate Function to check password length
let isPasswordLength = (password) => {
  // Check if password exists
  if (!password) {
    return false;
  } else {
    // Check password length
    if (password.length < 8 || password.length > 40) {
      return false;
    } else {
      return true; // Return password as valid
    }
  }
};

// Validate Function to check if valid password format
let validPassword = (password) => {
  // Check if password exists
  if (!password) {
    return false;
  } else {
    // Regular Expression to test if password is valid format
    const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d]).{8,40}$/);
    return regExp.test(password); // Return regular expression test result (true or false)
  }
};

// Array of Password validators
const passwordValidator = [
  // First password validator
  {
    validator: isPasswordLength,
    message: 'Password must be between 8 and 40 characters'
  },
  // Second password validator
  {
    validator: validPassword,
    message: 'Must have at least one uppercase, lowercase, and a number'
  }
];

// Our schema for each user inside the Users table
const userSchema = new Schema(
  {
    email: {type: String, required: true, unique: true, lowercase: true, validate: emailValidator},
    phoneNumber: {type: String, required: true},
    password: {type: String, required: true, validate: passwordValidator},
    privilage: {type: Number, required: true}
  }
);

// We will encrypt our password with bcryptjs
userSchema.pre('save', function(next){
  const user = this; // storing this here so i dont lose context of this

  // If the password inside userSchema isnt modified, we won't alter the password
  if (!(this.isModified('password'))) {
    console.log('password wasnt modified..');
    return next();
  }
  bcrypt.hash(this.password,8, function(error,hash)  {
    if (error) {
      console.log(error);
      return next(error);
    }
    else {
      // encrypt the password
      user.password = hash;
      next();
    }

  });
});
userSchema.methods.checkPassword =  function(password) {
  return bcrypt.compareSync(password, this.password); // true or false
};
// Let's immediately export the schema
module.exports = mongoose.model('User', userSchema);
