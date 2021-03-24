const express = require("express");
const CandidateSchema = require("../model/candidatesModel");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })


router.get("/all", (req, res) => {
  CandidateSchema.find({}, (err, candidates) => {
    if (err) {
      res.send(err);
    } else {
      res.send(candidates);
    }
  });
});

router.post("/new", upload.single("file"), (req, res) => {
  ;
  const newEmail = req.body.email;
  CandidateSchema.findOne({ email: newEmail }, (err, candidate) => {
    if (err) {
      res.send(err);
    }
    if (candidate) {
      res.send({ msg: "Candidate is already registered" });
    } else {
      const body = { ...req.body, img: `uploads/${req.file.originalname}` }
      const newCandidate = new CandidateSchema(body);
      newCandidate
        .save()
        .then((candidate) => {
          console.log(candidate);
          res.send(candidate);
        })
        .catch((err) => {
          res.send(err);
        });
    }
  });
});

module.exports = router;
