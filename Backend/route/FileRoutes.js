const express = require("express");
const router = express.Router();
const multer = require("multer");
const { fileUploadController } = require("../controllers/Fileupload");
// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/upload", upload.single("profile"), fileUploadController);

module.exports = router;
