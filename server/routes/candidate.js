const express = require("express");
const CandidateSchema = require("../model/candidatesModel");
const router = express.Router();
const passport = require("passport");
const multer = require("multer");

const usersModel = require("../model/usersModel");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/all", (req, res) => {
  CandidateSchema.find({}, (err, candidates) => {
    if (err) {
      res.send(err);
    } else {
      res.send(candidates);
    }
  });
});

router.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  upload.single("file"),
  (req, res) => {
    console.log(req.user);
    const reqEmail = req.body.email;
    CandidateSchema.findOne({ email: reqEmail }, (err, candidate) => {
      if (err) {
        res.send(err);
      } else if (reqEmail !== req.user.email) {
        res.send({
          success: false,
          msg: " Email does not match the registered email",
        });
      } else if (candidate) {
        res.send({ success: false, msg: "Candidate is already registered" });
      } else {
        const body = {
          ...req.body,
          img: `uploads/${req.file.originalname}`,
        };
        const newCandidate = new CandidateSchema(body);
        newCandidate
          .save()
          .then((candidate) => {
            console.log(candidate);
            res.send({ sucess: true, msg: "Details weres submitted" });
          })
          .catch((err) => {
            res.send(err);
          });
      }
    });
  }
);

module.exports = router;
