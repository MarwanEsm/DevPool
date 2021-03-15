const express = require ('express');
const EmployerSchema = require('../model/employersModel');
const router = express.Router();


router.get('/all', (req, res)=>{
    EmployerSchema.find({}, (err, employers)=>{
        if(err){
            res.send(err)
        }else{
            res.send(employers)
        }
    })
})

module.exports=router;