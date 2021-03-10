const express = require ('express');
const UserSchema = require('../model/usersModel');
const router = express.Router();


router.get('/all', (req, res) =>{
    UserSchema.find({}, (err, users) =>{
    if(err){
        res.send(err)
    }else{
        res.send(users)
    }
})})


module.exports = router;