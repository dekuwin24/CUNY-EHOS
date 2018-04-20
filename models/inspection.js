const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.createConnection("mongodb://steve:ccny@ds019028.mlab.com:19028/ccny598_team2"));

// Our schema for each waste pickup request
const inspectionSchema = new Schema(
  {
    inspector: {type: Number, required: true}, // ID of the requester
    lab: {type: String, required: true}, // Location of lab will be an int later
    requested: {type: String}, // time inspection was created
  }
);
inspectionSchema.plugin(autoIncrement.plugin, 'Lab_Inspections'); // _id auto increment
// Let's immediately export the schema
module.exports = mongoose.model('Lab_Inspections', inspectionSchema);