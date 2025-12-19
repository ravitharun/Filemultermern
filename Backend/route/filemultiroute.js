const express = require("express");
const router = express.Router();
const multer = require("multer");
const { fileUploadControllerThree } = require("../controllers/Multipile");
// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'MUploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/upload3", upload.array("Upload3Img",2), fileUploadControllerThree);

module.exports = router;
