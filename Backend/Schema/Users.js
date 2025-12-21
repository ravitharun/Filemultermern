
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String },
        isVerify_user: { type: Boolean, default: false },
        Mobilenumber: { type: Number },
        Cardnumberadhar: { type: Number },
        adharcardFpic: { type: String },
        adharcardBackpic: { type: String },
    },
    { timestamps: true }
);

const userSchemas = mongoose.model("User", userSchema);
module.exports = { userSchemas } 
