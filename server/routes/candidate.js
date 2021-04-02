const express = require("express");
const CandidateSchema = require("../model/candidatesModel");
const UserSchema = require("../model/usersModel");
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

// router.get("/isRegistered", (req, res) => {
//   CandidateSchema.find({ isRegistered: true }, (err, candidates) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(candidates);
//       console.log(candidates);
//     }
//   });
// });

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

/// can be used to fetch once a recruiter wants to check a candidate profile//
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
          userId: req.user._id,
        };
        const newCandidate = new CandidateSchema(body);
        newCandidate
          .save()
          .then((user) => {
            UserSchema.findOneAndUpdate(
              { email: user.email },
              // it did not update the status//
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
);

router.put(
  "/me",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.body);
    CandidateSchema.findOneAndUpdate(
      { userId: req.user.id },
      req.body,
      (err, candidate) => {
        if (err) {
          res.send(err);
        } else {
          console.log(candidate);
          res.send({ msg: "Changes were submitted" });
          // const body = {
          //   ...req.body,
          // };
          // // const newCandidate = new CandidateSchema(body);
          // // newCandidate
          // // console.log(req.body);
          // candidate.save()
          //   .then((body) => {
          //     console.log(body);
          //     res.send({ success: true, msg: "Details weres submitted" });
          //   })
          //   .catch((err) => {
          //     res.send(err);
          //   });
        }
      }
    );
  }
);

module.exports = router;
