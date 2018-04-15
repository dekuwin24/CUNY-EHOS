const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.createConnection("mongodb://steve:ccny@ds019028.mlab.com:19028/ccny598_team2"));
// Our schema for each waste pickup request
const wasteRequestSchema = new Schema(
  {
    requester: {type: Number, required: true}, // ID of lab person
    location: {type: String, required: true}, // Location of lab
    pending: {type: Boolean, required: true}, // needs to be scheduled
    requested: {type: String},
    label: {type: String, required: true},
    items: {type : Array, "default" : [], required: true, lowercase: true},
    comments: {type: String}    
  }
);

wasteRequestSchema.plugin(autoIncrement.plugin, 'Waste_Requests');
// Let's immediately export the schema
module.exports = mongoose.model('Waste_Requests', wasteRequestSchema);
