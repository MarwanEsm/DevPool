const express = require("express");
const { body, validationResult } = require("express-validator");
const secretOrKey = require("../Config.js").secretOrKey;
const jwt = require("jsonwebtoken");
const UserSchema = require("../model/usersModel");
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



// const payload = {
//   sub: UserSchema.id,
//   email: UserSchema.email,
// };

// const option = { expiresIn: 3600 };

// jwt.sign(payload, secretOrKey, option, (err, token) => {
//   if (err) {
//     res.json({
//       success: false,
//       token: "There was an error",
//     });
//   } else {
//     res.json({
//       sucess: true,
//       token: token,
//     });
//   }
// });

module.exports = router;
