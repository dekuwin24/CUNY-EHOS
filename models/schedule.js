const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

// Our schema for each waste pickup request
const scheduleSchema = new Schema(
  {
    id: {type: Number}, // user id  inner join with users table to get first last, lab, department etc...
    start: {type: Date, required: true}, // ID of lab person
    end: {type: Date}, // Location of lab
    serviced: {type: Boolean, required: true}, // complete?
  }
);

// Let's immediately export the schema
module.exports = mongoose.model('Pickup_Schedule', scheduleSchema);
