const mongoose = require("mongoose")

const userModel = new mongoose.Schema({
    firstName :{type:String,required:true},
    lastName : {type:String,required:true},
    contact :{type:Number,required:true},
    email :{type:String,required:true},
    password :{type:String,required:true},
    role :{type:String,required:true},
    profile :{type:String ,required:true},
    joiningDate :{type:Date,required:true},
    lastWorkingDate : {type:Date}

},
{
    timestamps: true,
})


const UserModel = mongoose.model("UserModel",userModel) 
module.exports = UserModel







