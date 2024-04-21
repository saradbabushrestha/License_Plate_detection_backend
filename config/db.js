const mongoose = require('mongoose');
// mongoose.set('debug', true);


const connection = mongoose.createConnection(`mongodb+srv://wepark:wepark123@cluster0.ssw2mr7.mongodb.net/Yolo?retryWrites=true&w=majority/login`).on('open',()=>{console.log("MongoDB Connected");}).on('error',()=>{
    console.log("MongoDB Connection error");
});

module.exports = connection;