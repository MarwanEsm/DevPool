const express = require("express");
const multer = require("multer");
const router = express.Router();

// const upload = multer({ dest: "uploads/" });

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "/tmp/my-uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.filename + "-" + Date.now());
//   },
// });

// const upload = multer({ storage: storage });

// router.post("/photos", upload.single("file"), function (req, res) {
//   upload(req, res, function (err) {
//     if (err instanceof multer.MulterError) {
//       res.send(err);
//     } else if (file) {
//       res.send({ msg: "photo was uploaded succesfully" });
//     }
//   });
// });

module.exports = router;
