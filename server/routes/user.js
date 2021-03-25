const express = require("express");
const { body, validationResult } = require("express-validator");
const secretOrKey = require("../Config.js").secretOrKey;
const jwt = require("jsonwebtoken");
const UserSchema = require("../model/usersModel");
const passport = require("passport");
const router = express.Router();

router.get("/all", (req, res) => {
  UserSchema.find({}, (err, users) => {
    if (err) {
      res.send(err);
    } else {
      res.send(users);
    }
  });
});

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  User.findById(req.user.id, function(err, user) {
    if (err) {
      res.status(404).json({ error: 'User does not exist!' });
    } else {
      console.log(user.pets);
      res.send(user);
    }
  });
});


router.post(
  "/new",
  body("email").isEmail(),
  body("password")
    .isLength({ min: 9 })
    .withMessage("must be at least 9 chars long")
    .matches(/\d/)
    .withMessage("must contain a number"),
  (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      res.send(err);
    } else {
      const newUser = new UserSchema(req.body);
      newUser
        .save()
        .then((user) => {
          res.send(user);
        })
        .catch((err) => {
          res.send(err);
        });
    }
  }
);





module.exports = router;
