const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

// Our schema for each waste pickup request
const wasteRequestSchema = new Schema(
  {
    requester:{type: String, required: true}, // ID of lab person
    location:{type: String, required: true}, // Location of lab
    pending: {type: Boolean, required: true},
    requested: {type: Date},
    label: {type: String, required: true},
    items: {type : Array, "default" : [], required: true, lowercase: true},
    comments: {type: String}    
  }
);

// Let's immediately export the schema
module.exports = mongoose.model('Waste_Requests', wasteRequestSchema);
