const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.createConnection("mongodb://steve:ccny@ds019028.mlab.com:19028/ccny598_team2"));

// Our schema for each waste pickup request
const scheduleSchema = new Schema(
  {
    requestId: {type: Number}, // request id = _id from  inner join with users table to get first last, lab, department etc...
    start: {type: String, required: true}, // ID of lab person
    end: {type: String}, // Location of lab,
    eventType: {type: Number, required: true},
    serviced: {type: Boolean, required: true}, // pickup complete?
  }
);
scheduleSchema.plugin(autoIncrement.plugin, 'Schedule'); // _id auto increment
// Let's immediately export the schema
module.exports = mongoose.model('Schedule', scheduleSchema);
