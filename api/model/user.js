const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
 
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean,enum: ['user', 'admin'], default: 'user', required: true },
    dateOfJoining: { type:Date, required: true}
});

const userschema = mongoose.model('userschema', UserSchema);

module.exports = userschema;


