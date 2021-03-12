const express = require("express");
const CandidateSchema = require("../model/candidatesModel");
const router = express.Router();

router.get("/all", (req, res) => {
  CandidateSchema.find({}, (err, candidates) => {
    if (err) {
      res.send(err);
    } else {
      res.send(candidates);
    }
  });
});

router.post("/new", (req, res) => {
  console.log("req.", req.body);
  const newCandidate = new CandidateSchema(req.body);
  newCandidate
    .save()
    .then((candidate) => {
      console.log(candidate);
      res.send(candidate);
    })
    .catch((err) => {
      res.send(err);
     
    });
});


module.exports = router;
