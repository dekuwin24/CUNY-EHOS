const verifyToken = require('./middlewares');
const Gas = require('../models/gas');
const Explosive = require('../models/explosive');
const FlammableSolid = require('../models/flammableSolid');
const Toxic = require('../models/toxic');
const FlammableLiquid = require('../models/explosive');
const Radiation = require('../models/radiation');
const Oxidizer = require('../models/oxidizer');
const Miscellaneous = require('../models/miscellaneous');
const Corrosive = require('../models/corrosive');
const jwt = require('jsonwebtoken');
const dbConfig = require('../config/database');
const moment = require('moment');

module.exports = (router) => {
  router.get('/:hazardClass',(request,response) => {
    switch (request.params.hazardClass) {
      case 'Gas':
        Gas.find((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, items: hazards});
          }
        });
        break;
      case 'Toxic':
        Toxic.find((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, items: hazards});
          }
        });
        break;
      case 'Oxidizer':
        Oxidizer.find((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, items: hazards});
          }
        });
        break;
      case 'Miscellaneous':
        Miscellaneous.find((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, items: hazards});
          }
        });
        break;
      case 'Corrosive':
        Corrosive.find((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, items: hazards});
          }
        });
        break;
      case 'Radiation':
        Radiation.find((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, items: hazards});
          }
        });
        break;
      case 'Flammable Liquid':
        FlammableLiquid.find((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, items: hazards});
          }
        });
        break;
      case 'Flammable Solid':
        FlammableSolid.find((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, items: hazards});
          }
        });
        break;
      default:
        break;
    }
  });
  router.post('/:hazardClass',(request,response) => {
    switch (request.params.hazardClass) {
      case 'Gas':
        let gas = new Gas({
          wasteRequest: request.body.requestId,
          chemicals: request.body.chemicals,
          quantity: request.body.quantity,
          measuredIn: request.body.measuredIn
        });
        gas.save((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, message: 'Item(s) stored!'});
          }
        });
        break;
      case 'Explosive':
        let explosive = new Explosive({
          wasteRequest: request.body.requestId,
          chemicals: request.body.chemicals,
          quantity: request.body.quantity,
          measuredIn: request.body.measuredIn
        });
        explosive.save((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, message: 'Item(s) stored!'});
          }
        });
        break;
      case 'Oxidizer':
        let oxidizer = new Oxidizer({
          wasteRequest: request.body.requestId,
          chemicals: request.body.chemicals,
          quantity: request.body.quantity,
          measuredIn: request.body.measuredIn
        });
        oxidizer.save((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, message: 'Item(s) stored!'});
          }
        });
        break;
      case 'Toxic':
        let toxic = new Toxic({
          wasteRequest: request.body.requestId,
          chemicals: request.body.chemicals,
          quantity: request.body.quantity,
          measuredIn: request.body.measuredIn
        });
        toxic.save((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, message: 'Item(s) stored!'});
          }
        });
        break;
      case 'Corrosive':
        let corrosive = new Corrosive({
          wasteRequest: request.body.requestId,
          chemicals: request.body.chemicals,
          quantity: request.body.quantity,
          measuredIn: request.body.measuredIn
        });
        corrosive.save((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, message: 'Item(s) stored!'});
          }
        });
        break;
      case 'Flammable Liquid':
        let fL = new FlammableLiquid({
          wasteRequest: request.body.requestId,
          chemicals: request.body.chemicals,
          quantity: request.body.quantity,
          measuredIn: request.body.measuredIn
        });
        fL.save((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, message: 'Item(s) stored!'});
          }
        });
        break;
      case 'Flammable Solid':
        let fS = new FlammableSolid({
          wasteRequest: request.body.requestId,
          chemicals: request.body.chemicals,
          quantity: request.body.quantity,
          measuredIn: request.body.measuredIn
        });
        fS.save((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, message: 'Item(s) stored!'});
          }
        });
        break;
      case 'Miscellaneous':
        let misc = new Miscellaneous({
          wasteRequest: request.body.requestId,
          chemicals: request.body.chemicals,
          quantity: request.body.quantity,
          measuredIn: request.body.measuredIn
        });
        misc.save((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, message: 'Item(s) stored!'});
          }
        });
        break;
      case 'Radiation':
        let rad = new Radiation({
          wasteRequest: request.body.requestId,
          chemicals: request.body.chemicals,
          quantity: request.body.quantity,
          measuredIn: request.body.measuredIn
        });
        rad.save((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, message: 'Item(s) stored!'});
          }
        });
        break;
      default:
        break;
    }
  });
  router.delete('/:hazardClass',(request,response)=>{
    switch (request.params.hazardClass) {
      case 'Gas':
        Gas.remove((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, message: "Storage item deleted!"});
          }
        });
        break;
      case 'Toxic':
        Toxic.remove((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, message: "Storage item deleted!"});
          }
        });
        break;
      case 'Oxidizer':
        Oxidizer.remove((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, message: "Storage item deleted!"});
          }
        });
        break;
      case 'Miscellaneous':
        Miscellaneous.remove((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, message: "Storage item deleted!"});
          }
        });
        break;
      case 'Corrosive':
        Corrosive.remove((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, message: "Storage item deleted!"});
          }
        });
        break;
      case 'Radiation':
        Radiation.remove((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, message: "Storage item deleted!"});
          }
        });
        break;
      case 'Flammable Liquid':
        FlammableLiquid.remove((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, message: "Storage item deleted!"});
          }
        });
        break;
      case 'Flammable Solid':
        FlammableSolid.remove((err,hazards) => {
          if (err) {
            response.status(500).json({ success: false, message: err });
          }
          else {
            response.status(200).json({ success: true, message: "Storage item deleted!"});
          }
        });
        break;
    }
  });
  return router;
}
