const express = require("express");
const cors = require("cors");
require("dotenv").config();
const fileRoutes = require("./route/FileRoutes");
const MultipilfileRoutes = require("./route/filemultiroute");

// const upload = multer({ storage: storage });
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/files", fileRoutes);
app.use("/api/Multiplefiles", MultipilfileRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
