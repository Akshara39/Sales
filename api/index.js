const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connectDb = require("./database/connect")
const userRoute = require("./routes/userroutes")
const feedbackroutes = require("./routes/feedbackroutes")


const dotenv = require("dotenv")

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use("/api/v1", userRoute)

app.use('/api/v1', feedbackroutes);

app.get("/health",(req,res)=>{
    res.send("HELLO WORLD")
})
const start = async()=>{
    try{
          await connectDb(process.env.DATABASE_URL)
          app.listen(process.env.PORT,()=>
          console.log(`server is running on port ${process.env.PORT}`))

    }catch(error){
        console.log(error) 

    }
}

start()
