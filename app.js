const express = require("express");
const bodyParser = require("body-parser")
const UserRoute = require("./routes/user.routes");
const ToDoRoute = require('./routes/todo.router');
const GetDataRoute = require('./routes/getdata.router')
const app = express();

app.use(bodyParser.json())

 app.use("/",UserRoute);
 app.use("/",ToDoRoute);
 app.use("/",GetDataRoute);

 
module.exports = app;