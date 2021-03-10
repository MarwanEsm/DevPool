const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    firstName :{type:String},
    lastName :{type:String},
    email : {type:String, required:true},
    password :{type:String, required:true},
    // address:{type:Array, required:true},
    // adjective:{type:String, required:true},
   


});

module.exports = mongoose.model('user', UserSchema);