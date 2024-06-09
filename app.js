const express = require("express")
const mongoose = require("mongoose") 

const app = express()

const vendorRoutes = require('./routes/vendorRoutes')
const sale = require('./routes/saleStatusRoutes')
const prospectRoutes = require('./routes/prospectRoutes')
const leadStatusRoutes = require('./routes/leadStatusRoutes')
const userRoutes =require('./routes/userRoutes');
const auth = require('./middleware/auth')


const { error } = require('console');
const { json } = require('body-parser');
const connectWithDB = require("./config/database")

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.use("/api/v1",userRoutes)
const start = async() => {
    try{
      await connectWithDB()
      
app.listen(PORT,()=>{
    console.log("server is runnning on port 3000");
})
    }catch(error){
        console.log(error)
    }
}
start()

