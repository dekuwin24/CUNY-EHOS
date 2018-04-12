const Schedule = require('../models/schedule');
const jwt = require('jsonwebtoken');
const dbConfig = require('../config/database');
const verifyToken = require('./middlewares');
const moment = require('moment');

module.exports = (router) => {
  router.get('/', verifyToken, (request,response) => {
    Waste.find('request_id requester location pending comments label requested', (err,waste_requests) => {
      if (err) {
        // Connection error was found
        response.status(500).json({success: false, message: err});
      }
      else {
        if (waste_requests) {
          response.status(200).json({success: true, requests: waste_requests});
        }
        else {
          response.status(404).json({success: false, message: "No requests in system."});
        }
      }
    });
    // TODO: implement the storage and supply request endpoints

  });
  
  router.get('/pickupRequests', verifyToken, (request,response) => {
    Waste.find('requester location pending comments label requested', (err,waste_requests) => {
        if (err) {
          // Connection error was found
          response.status(500).json({success: false, message: err});
        }
        else {
          if (waste_requests) {
            response.status(200).json({success: true, requests: waste_requests});
          }
          else {
            response.status(404).json({success: false, message: "No requests in system."});
          }
        }
      });
  });

  router.get('/pickupRequests/:id', verifyToken,(request,response) => {
    Waste.find({ _id: request.params.id }, 'request_id requester location pending comments label requested', (err,waste_request) => {
      if (err) {
        // Connection error was found
        response.status(500).json({success: false, message: err});
      }
      else {
        if (waste_request) {
          response.status(200).json({success: true, request: waste_request});
        }
        else {
          response.status(404).json({success: false, message: "Request not in system."});
        }
      }
    });
  });
// TODO: implement later
//   router.patch('/pickupRequests/:id',verifyToken,(request, response) => {
//     //The only thing that is able to change is the pending attribute
//     Waste.findOneAndUpdate({_id: request.params.id}, request.body.pending, (err,waste_request) => {
//       if (err) {
//         console.log(err);
//         response.status(500).json({ success: false, message: err });
//       }
//       else if (!waste_request) {
//         response.status(200).json({ success: false, message: "Request does not exist" });
//       }
//       else {
//         response.status(200).json({ success: true, message: "Patched!" });
//       }
//     });
//   });

  

  router.post('/', verifyToken, (request, response) => {
    let schedule_request = new Schedule({
      id: request.body.id, // user id - request.body._id 
      start: request.body.start, // Location of lab
      end: request.body.end,
      serviced: false
    });
    schedule_request.save((error) => {
      if (error) {
        response.json({success: false, message: error});
      }
      else {
        response.json({success: true, message: 'Waste request sent!'});
      }
    });
  });
  return router;
}
