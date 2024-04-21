const router = require("express").Router();

const {getData} = require('../controller/getdata.controller')



router.get("/getdata1",getData)


module.exports = router;