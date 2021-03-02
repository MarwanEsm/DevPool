const express = require("express");
const JobSchema = require("../model/jobsModel");
const router = express.Router();

router.get("/all", (req, res) => {
  JobSchema.find({}, (err, jobs) => {
    if (err) {
      console.log("error :>> ", error);
    } else {
      console.log("jobs :>> ", jobs);
      res.send(jobs);
    }
  });
});

router.post("/new", (req, res) => {});

module.exports = router;
