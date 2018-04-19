const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

// Our schema for each waste pickup request
const scheduleSchema = new Schema(
  {
    id: {type: Number}, // user id  inner join with users table to get first last, lab, department etc...
    start: {type: String, required: true}, // ID of lab person
    end: {type: String}, // Location of lab
    serviced: {type: Boolean, required: true}, // pickup complete?
  }
);

// Let's immediately export the schema
module.exports = mongoose.model('Schedule_Requests', scheduleSchema);