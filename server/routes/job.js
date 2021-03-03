const express = require("express");
const JobSchema = require("../model/jobsModel");
const router = express.Router();

router.get("/all", (req, res) => {
  JobSchema.find({}, (err, jobs) => {
    if (err) {
      res.send(err);
    } else {
      res.send(jobs);
    }
  });
});

router.post("/new", (req, res) => {
  console.log("req.", req.body);
  const newJob = new JobSchema(req.body);
  newJob
    .save()
    .then((job) => {
      console.log(job);
      res.send(job);
    })
    .catch((err) => {
      res.send(err);
      res;
    });
});

module.exports = router;
