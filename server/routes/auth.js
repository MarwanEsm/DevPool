const express = require("express");
const bcrypt = require("bcrypt");
const UserSchema = require("../model/usersModel");
const CandidateSchema = require("../model/candidatesModel");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { sanitizeBody } = require("express-validator");
const router = express.Router();
const mailgun = require("mailgun-js");
const domain = "webApp";
// const mg = ({apiKey: api_key, domain: domain})

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

///update password function, send token then send it via email ///
// router.put("/me", (req, res) => {
//   console.log(req.body);
//   const reqemail = req.body.email;
//   const reqpassword = req.body.password;
//   UserSchema.findOneAndUpdate({ email: reqemail }, req.body, (err, user) => {
//     if (err) {
//       res.send(err);
//     }
//     if (!user) {
//       res.send({ msg: "User does not exist" });
//     } else {
//       bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash(reqpassword, salt, function (err, hash) {
//           if (err) {
//             res.send(err);
//           } else {
//             (user.password = hash),
//               user
//                 .save()
//                 .then((user) => {
//                   res.send({ msg: " Password was updated" });
//                 })
//                 .catch((err) => {
//                   res.send(err);
//                 });
//           }
//         });
//       });
//     }
//   });
// });

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

///Forgot password function///

router.put("/forgotpassword", (req, res) => {
  const reEmail = req.body.email;
  UserSchema.findOne({ email: reEmail }, (err, user) => {
    if (err || !user) {
      res.status(404).json({ error: "User does not exist!" });
    } else {
      const token = jwt.sign({ _id: user.id }, process.env.secretOrKey, {
        expiresIn: "20m",
      });
      const data = {
        from: "noreply@webDev.com",
        to: reEmail,
        subject: "Password reset",
        html: `<h2>Please click on given Link to reset your password</h2>
        <p>${process.env.webApp}/resetpasssword/${token}</p>`,
      };
      UserSchema.updateOne({ resetLink: token }, (err, success) => {
        if (err || !user) {
          res.status(400).json({ error: "rest password link error" });
        } else {
          res.send(data, (err, body) => {
            if (err) {
              res.send(err);
            } else {
              res.send({ msg: "reset link was sent " });
            }
          });
        }
      });
    }
  });
});

/// Reset Password function ///

router.patch("/resetpassword", (req, res) => {
  const { resetLink, newPass } = req.body;
  if (resetLink) {
    jwt.verify(resetLink.env.secretOrKey, (err, decodedData) => {
      if (err) {
        res.status(401).json({ err: "Token is expired" });
      } else {
        UserSchema.findOneAndDelete({ resetLink }, (err, user) => {
          if (err || !user) {
            res
              .status(400)
              .json({ error: "User with this token does not exist" });
          } else {
            bcrypt.genSalt(10, function (err, salt) {
              bcrypt.hash(newPass, salt, function (err, hash) {
                if (err) {
                  res.send(err);
                } else {
                  const obj = {
                    password: newPass,
                  };
                  user.save((err, user) => {
                    if (err) {
                      res.send(err);
                    } else {
                      res.send(user);
                    }
                  });
                }
              });
            });
          }
        });
      }
    });
  }
});

module.exports = router;
