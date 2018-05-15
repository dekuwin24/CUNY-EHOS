const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.createConnection("mongodb://steve:ccny@ds019028.mlab.com:19028/ccny598_team2"));

// Our schema for each waste pickup request
const radiationSchema = new Schema(
  {
    wasteRequest: {type: Number, required: true}, // ID of the request
    chemicals: {type: Array, required: true}, // Location of lab will be an int later
    quantity: {type: Number},
    measuredIn: {type: String}
  }
);
radiationSchema.plugin(autoIncrement.plugin, 'Radiation_Items'); // _id auto increment
// Let's immediately export the schema
module.exports = mongoose.model('Radiation_Items', radiationSchema);