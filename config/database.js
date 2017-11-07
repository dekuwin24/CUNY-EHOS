/*
  This config file stores the info needed to connect to my test MongoDB database
*/
const hashKey = require('crypto').randomBytes(256).toString('hex'); // Use crypto module in nodejs to create a secret
module.exports = {
  uri: "mongodb://steve:ccny@ds019028.mlab.com:19028/ccny598_team2",
  secret: hashKey,
  options: { useMongoClient: true },
  db:'ccny598_team2'
}
