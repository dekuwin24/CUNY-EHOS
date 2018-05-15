const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

// Our schema for each waste pickup request
const hazardSchema = new Schema(
  {
    name: { type: String }
  }
);
// Let's immediately export the schema
module.exports = mongoose.model('Hazard', hazardSchema);