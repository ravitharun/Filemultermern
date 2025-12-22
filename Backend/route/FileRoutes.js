const express = require("express");
const router = express.Router();
const multer = require("multer");
const { fileUploadController, getall } = require("../controllers/Fileupload");
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

router.post(
  "/upload",
  upload.fields([
    { name: "adharcardFpic", maxCount: 1 },
    { name: "adharcardBackpic", maxCount: 1 }
  ]),
  fileUploadController
);
router.get(
  "/getall",

  getall
);



module.exports = router;
