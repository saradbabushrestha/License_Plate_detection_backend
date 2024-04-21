const db = require('../config/db');
const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');
const {Schema} = mongoose;
const vehicleSchema = new Schema({
  frame_nmr: Number,
  car_bbox: String,
  license_plate_bbox: String,
  license_number: String,
  license_number_score: Decimal128,
  entry_time:String,
  exit_time:String,
  exited:Boolean
})
const Vehicle = db.model('Vehicle',vehicleSchema);
module.exports = {Vehicle}
