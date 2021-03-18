const express = require("express");
const EmployerSchema = require("../model/employersModel");
const router = express.Router();

router.get("/all", (req, res) => {
  EmployerSchema.find({}, (err, employers) => {
    if (err) {
      res.send(err);
    } else {
      res.send(employers);
    }
  });
});

router.post("/new", (req, res) => {
  const emEmail = req.body.concernedPersonEmail;
  EmployerSchema.findOne({ concernedPersonEmail: emEmail }, (err, employer) => {
    if (err) {
      res.send(err);
    }
    if (employer) {
      res.send({ msg: "Employer is already registered" });
    } else {
      const newEmployer = new EmployerSchema(req.body);
      newEmployer
        .save()
        .then((newEmployer) => {
          res.send(newEmployer);
        })
        .catch((err) => {
          res.send(err);
        });
    }
  });
});

module.exports = router;
