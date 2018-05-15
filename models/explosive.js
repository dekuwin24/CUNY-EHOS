const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.createConnection("mongodb://steve:ccny@ds019028.mlab.com:19028/ccny598_team2"));
// Our schema for each waste pickup request
const explosiveSchema = new Schema(
  {
    wasteRequest: {type: Number, required: true}, // ID of the request
    chemicals: {type:Array}, 
    quantity: {type: Number},
    measuredIn: {type: String}
  }
);

explosiveSchema.plugin(autoIncrement.plugin, 'Explosive_Items');
// Let's immediately export the schema
module.exports = mongoose.model('Explosive_Items', explosiveSchema);