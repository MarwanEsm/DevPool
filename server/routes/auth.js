const express = require("express");
const bcrypt = require("bcrypt");
const UserSchema = require("../model/usersModel");
const router = express.Router();

router.post("/register", (req, res) => {
  const reqfirstName = req.body.firstName;
  const reqlastName = req.body.lastName;
  const reqemail = req.body.email;
  const reqpassword = req.body.password;
  const reqcity = req.body.city;
  const reqcountry = req.body.country;
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
              firstName: reqfirstName,
              lastName: reqlastName,
              email: reqemail,
              password: hash,
              city: reqcity,
              country: reqcountry,
              owner: reqowner,
            });
            newUser
              .save()
              .then((user) => {
                res.send('Your details have been submitted ');
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

module.exports = router;
