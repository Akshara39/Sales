const mongoose = require("mongoose")
const vendorSchema = new mongoose.Schema({
    companyName : {type:String ,required:true},
    contactFullName : {type:String ,required:true},
    contactNumber : {type:Number ,required:true},
    contactEmail : {type:String ,required:true},
    vendorCaterogyId : {type:mongoose.Schema.Types.ObjectId , ref: 'vendorCategory'},
    position : {type:String, required: true}
},
{
    timestamps: true,
})
const vendorCategory = new mongoose.Schema({
    label: {type: String, required:true} 
},
{
    timestamps: true,
})


module.exports = {vendorSchema,vendorCategory}






