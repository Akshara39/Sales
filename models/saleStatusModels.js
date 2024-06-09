const mongoose = require("mongoose")

const saleStatus = new mongoose.Schema({
    label :{type:String,required:true}
},
{
    timestamps: true,
})

const SaleStatus = mongoose.model('SaleStatus', saleStatus);
module.exports = SaleStatus;

