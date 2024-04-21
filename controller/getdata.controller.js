const getDataService = require('../services/getdata.service');
const {Vehicle} = require("../models/Yolo.js"); 

const getData = async(req,res)=> {
    try {

        const countval = await Vehicle.countDocuments({exited : false});
        console.log("call from mobile app")
        const count = JSON.stringify(countval);
        res.status(200).json({occupied:count});
      } catch (error) {
        console.error("Error getting vehicle count:", error);
        res.status(500).json({error : error.message});
      }
    }

module.exports ={getData};