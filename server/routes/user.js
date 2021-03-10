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


router.post('/new', (req,res)=>{
    const newUser = new UserSchema(req.body);
    newUser.save().then((user) =>{
        res.send(user)
    }) .catch((err)=>{
        res.send(err)
    });
});
        
       
module.exports = router;