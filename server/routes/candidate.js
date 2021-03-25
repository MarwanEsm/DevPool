const express = require("express");
const CandidateSchema = require("../model/candidatesModel");
const router = express.Router();
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
    //  jwt.encode(token, (err, payload)=>{
    //   if (err) {
    //     res.send(err)
    //   }else{
    //     const payload={

    //       id : user.id,
    //       email : user.email
    //     }

    //   }
    // })

    UserSchema.findOne({ email: user.email }),
      (err, user) => {
        if (err) {
          res.send({ msg: "User does not exist" });
        } else if (user) {
          const newEmail =
            user.email; /*compare the email from the encoded token with  entered email*/

          CandidateSchema.findOne({ email: newEmail }, (err, candidate) => {
            if (err) {
              res.send(err);
            } else if (candidate) {
              res.send({ msg: "Candidate is already registered" });
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
                  res.send(candidate);
                })
                .catch((err) => {
                  res.send(err);
                });
            }
          });
        }
      };
  }
);
module.exports = router;
