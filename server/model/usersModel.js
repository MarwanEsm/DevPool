const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    firstName :{type:String, required:true},
    lastName :{type:String, required : true},
    email : {type:String, required:true},
    password :{type:Number, required:true},
    address:{type:Array, required:true},
    adjective:{type:String, required:true},
   


});

module.exports = mongoose.model('user', UserSchema);