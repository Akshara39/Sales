const mongoose = require("mongoose")

const prospect = new mongoose.Schema({
 
  firstName : {type:String ,required:true},
  lastName : {type:String ,required:true},
  contact : {type:Number ,required:true},
  email : {type:String ,required:true},
  company : {type:String ,required:true},
  position : {type:Number ,required:true},
  notes :  {type:String ,required:true},
  website : {type:String ,required:true}, 
  leadStatusId : {type:mongoose.Schema.Types.ObjectId ,ref: 'leadStatus' ,required:true},
  saleStatusId : {type:mongoose.Schema.Types.ObjectId ,ref: 'saleStatus',required:true}

},
{
    timestamps: true,
})


const Prospect = mongoose.model('Prospect', prospect)
module.exports = Prospect;