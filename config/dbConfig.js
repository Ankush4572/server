const mongoose=require('mongoose');

//connection logic
mongoose.connect(process.env.CONN_STRING);

//connection state
const db=mongoose.connection;

//check db connection
db.on('connected',() => {
    console.log('DB connection Successful!');
})

db.on('err',()=>{
    console.log('DB Connection Failed!');
})

module.exports=db;