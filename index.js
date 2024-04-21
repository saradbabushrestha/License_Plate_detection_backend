const app = require("./app");

const db = require('./config/db')

const port = 3001;

app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.get('/getdata',(req,res) => {
    
    res.send({occupied:'30'})
    console.log('this is getdata');
})


app.listen(port,()=>{
    console.log(`Server Listening on Port http://localhost:${port}`);
})