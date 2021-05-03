const express = require("express");
const CandidateSchema = require("../model/candidatesModel");
const UserSchema = require("../model/usersModel");
const EmployerSchema = require("../model/employersModel");
const router = express.Router();
const passport = require("passport");
const multer = require("multer");

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

router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.user);
    CandidateSchema.findOne(
      { userId: req.user._id },
      function (err, candidate) {
        if (err) {
          console.log(err);
        } else {
          res.send(candidate);
        }
      }
    );
  }
);

router.get("/:id", (req, res) => {
  const candidateId = req.params.id;
  CandidateSchema.findById(candidateId, function (err, candidate) {
    if (err) {
      console.log(err);
    } else {
      res.send(candidate);
    }
  });
});

router.put(
  "/me",
  passport.authenticate("jwt", { session: false }),
  upload.single("file"),
  (req, res) => {
    console.log(req.file);
    console.log(req.user);

    const reqEmail = req.user.email;
    console.log(reqEmail);
    const body = {
      ...req.body,
      img: `uploads/${req.file.originalname}`,
      userId: req.user._id,
    };

    // CandidateSchema.findOneAndUpdate({ email: reqEmail }, (err, candidate) => {
    //   console.log(body);
    //   console.log(err);
    //   res.send({ msg: "Details were updated" });
    // });

    CandidateSchema.findOneAndUpdate(
      { email: reqEmail },
      (req.user._id,
      body,
      (err, candidate) => {
        console.log(candidate);
        if (err) {
          res.send(err);
        } else {
          res.send({ msg: "Candidate updated", candidate });
        }
      })
    );
  }
);

router.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  upload.single("file"),
  (req, res) => {
    console.log(req.body);
    const reqEmail = req.body.email;
    EmployerSchema.findOne({ email: reqEmail }, (err, employer) => {
      if (err) {
        res.send(err);
      } else if (employer) {
        res.send({
          success: false,
          msg: "User exist",
        });
      } else {
        CandidateSchema.findOne({ email: reqEmail }, (err, candidate) => {
          if (err) {
            res.send(err);
          } else if (reqEmail !== req.user.email) {
            res.send({
              success: false,
              msg: " Email does not match the registered email",
            });
          } else if (candidate) {
            res.send({
              success: false,
              msg: "Candidate is already registered",
            });
          } else {
            const body = {
              ...req.body,
              img: `uploads/${req.file.originalname}`,
              userId: req.user._id,
            };
            const newCandidate = new CandidateSchema(body);
            newCandidate
              .save()
              .then((user) => {
                UserSchema.findOneAndUpdate(
                  { email: user.email },
                  { isRegistered: true }
                ).then((user) => {
                  user.save();
                });
                res.send({ msg: "Details weres submitted" });
              })
              .catch((err) => {
                res.send(err);
              });
          }
        });
      }
    });
  }
);


router.delete(
  "/me",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const reqEmail = req.user.email;
    CandidateSchema.findOneAndDelete({ email: reqEmail }, (err, candidate) => {
      if (err) {
        res.send(err);
      } else {
        res.send('done');
        console.log(candidate);
      }
    });
  }
);

module.exports = router;
