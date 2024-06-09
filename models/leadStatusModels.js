const mongoose = require("mongoose")

const leadStatus = new mongoose.Schema({
    label :{type:String,required:true}
},
{
    timestamps: true,
})

const LeadStatus = mongoose.model('LeadStatus', leadStatus);
module.exports = LeadStatus;

