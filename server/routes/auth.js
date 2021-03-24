const express = require("express");
const bcrypt = require("bcrypt");
const UserSchema = require("../model/usersModel");
const router = express.Router();

router.post("/register",  (req, res) => {
  console.log(req.body);
  const reqemail = req.body.email;
  const reqpassword = req.body.password;
  const reqowner = req.body.owner;

  UserSchema.findOne({ email: reqemail }, (err, user) => {
    if (err) {
      res.send(err);
    }
    if (user) {
      res.send({ msg: "user exists" });
    } else {
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(reqpassword, salt, function (err, hash) {
          if (err) {
            res.send(err);
          } else {
            const newUser = new UserSchema({
              email: reqemail,
              password: hash,
              owner: reqowner,
            });
            newUser
              .save()
              .then((user) => {
                res.send(user);
              })
              .catch((err) => {
                res.send(err);
              });
          }
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  console.log(req.body);

  const reqemail = req.body.email;
  const reqpassword = req.body.password;

  UserSchema.findOne({ email: reqemail }, (err, user) => {
    if (err) {
      res.send(err);
    }
    if (!user) {
      res.send({ msg: "user does not exist" });
    } else {
      bcrypt.compare(reqpassword, user.password, function (err, result) {
        if (err) {
          res.send(err);
        } else {
          if (result == true) {

            const payload={
              id: user.id,
              email:user.email
            } 

            jwt.sign(payload, keys.secretOrkey, (err, token)=>{
              if(err){
                res.send(err)
              }
            })
           


          
          } else {
            res.send({ msg: "wrong password" });
          }
        }
      });
    }
  });
});

module.exports = router;
