const express = require("express");
const bcrypt = require("bcrypt");
const UserSchema = require("../model/usersModel");
const CandidateSchema = require("../model/candidatesModel");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/register", (req, res) => {
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
                res.send({ msg: " Details were submitted" });
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
  const reqemail = req.body.email;
  const reqpassword = req.body.password;
  console.log(reqemail);
  UserSchema.findOne({ email: reqemail }, (err, user) => {
    console.log(user);
    if (err) {
      res.send(err);
    } else if (!user) {
      res.send({ msg: "User does not exist" });
    } else {
      bcrypt.compare(reqpassword, user.password, (err, result) => {
        if (err) {
          res.send(err);
        } else if (result == true) {
          const payload = {
            id: user.id,
            email: user.email,
          };
          jwt.sign(payload, process.env.secretOrKey, (err, token) => {
            if (err) {
              res.send(err);
            } else {
              res.status(200).json({ success: true, token: token, user: user });
            }
          });
        } else {
          res.send({ msg: "Wrong Password" });
        }
      });
    }
  });
});

router.put(
  "/me",
  (req, res) => {
    const reqemail = req.body.email;
    const reqpassword = req.body.password;
    UsersChema.findOneAndUpdate({ email: reqemail }, req.body, (err, user) => {
      if (err) {
        res.send(err);
      } else if (!user) {
        res.send({ msg: "User does not exist" });
      } else {
        bcrypt.compare(reqpassword, user.password, (err, result) => {
          if (err) {
            res.send(err);
          } else if (result == true) {
            const payload = {
              id: user.id,
              email: user.email,
            };
            jwt.sign(payload, process.env.secretOrKey, (err, token) => {
              if (err) {
                res.send(err);
              } else {
                res
                  .status(200)
                  .json({ success: true, token: token, user: user });
              }
            });
          } 
        });
      }
    });
  }
);




module.exports = router;
