const express = require("express");
const EmployerSchema = require("../model/employersModel");
const passport = require("passport");
const router = express.Router();
const UserSchema = require("../model/usersModel");

router.get("/all", (req, res) => {
  EmployerSchema.find({}, (err, employers) => {
    if (err) {
      res.send(err);
    } else {
      res.send(employers);
    }
  });
});

router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.user);
    EmployerSchema.findOne({ userId: req.user._id }, function (err, employer) {
      if (err) {
        console.log(err);
      } else {
        res.send(employer);
      }
    });
  }
);

router.get("/:id", (req, res) => {
  const employerId = req.params.id;
  EmployerSchema.findById(employerId, function (err, employer) {
    if (err) {
      console.log(err);
    } else {
      res.send(employer);
    }
  });
});

router.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const emEmail = req.body.email;
    console.log(req.user.email);
    console.log(req.body);
    EmployerSchema.findOne({ email: emEmail }, (err, employer) => {
      if (err) {
        res.send(err);
      } else if (employer) {
        res.send({
          success: false,
          msg: "Employer is already registered",
        });
      } else if (emEmail !== req.user.email) {
        res.send({
          success: false,
          msg: "Email does not match with registered email",
        });
      } else {
        const body = {
          ...req.body,
          userId: req.user._id,
        };
        const newEmployer = new EmployerSchema(body);
        newEmployer
          .save()
          .then((user) => {
            UserSchema.findOneAndUpdate(
              { email: user.email },
              { isRegistered: true }
            ).then((user) => {
              user.save();
            });

            res.send({
              success: true,
              msg: " Details were submitted",
            });
          })

          .catch((err) => {
            res.send(err);
          });
      }
    });
  }
);

module.exports = router;
