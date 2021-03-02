const mongoose = require("mongoose").Schema.Types;
const jobSchema = new mongoose.Schema({
  job: {
    description: String,
    location: String,
    salary: Number,
    title: String,
  } /*what to write since the data type is not only string*/,
});
module.export = mongoose.model("job", jobSchema);

const JobModel = require("/job");
const msg = new JobModel({
  job: {
    description: "expereince",
    location: "frankfurt",
    salary: 30000,
    title: "mentor",
  },
});

msg
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((doc) => {
    console.log(doc);
  });
