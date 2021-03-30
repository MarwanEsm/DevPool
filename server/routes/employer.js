const express = require("express");
const EmployerSchema = require("../model/employersModel");
const passport = require("passport");
const router = express.Router();
const usersModel = require("../model/usersModel");

router.get("/all", (req, res) => {
  EmployerSchema.find({}, (err, employers) => {
    if (err) {
      res.send(err);
    } else {
      res.send(employers);
    }
  });
});



router.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    
    const emEmail = req.body.concernedPersonEmail;
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
        const newEmployer = new EmployerSchema(req.body);
        newEmployer
          .save()
          .then((employer) => {
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
