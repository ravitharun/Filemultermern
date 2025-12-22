const { default: mongoose } = require("mongoose");
const { cloudinary } = require("../config/Cloud");
const { userSchemas } = require("../Schema/Users");



const fileUploadController = async (req, res) => {
    try {
        console.log("BODY:", req.body);
        console.log("FILES:", req.files);

        if (!req.files || !req.files.adharcardFpic || !req.files.adharcardBackpic) {
            return res.status(400).json({ message: "Files missing" });
        }


        const frontImagePath = req.files.adharcardFpic[0].path;
        const backImagePath = req.files.adharcardBackpic[0].path;
        const frontUpload = await cloudinary.uploader.upload(frontImagePath,);
        const backUpload = await cloudinary.uploader.upload(backImagePath);
        console.log(frontUpload.secure_url, 'frontUpload')
        console.log(backUpload.secure_url, 'frontUpload')

        const savedb = new userSchemas({
            name: req.body.name,
            email: req.body.Email,
            isVerify_user: req.body.isVerify_user,
            Mobilenumber: Number(req.body.Mobilenumber),
            Cardnumberadhar: Number(req.body.Cardnumberadhar),
            adharcardFpic: frontUpload.secure_url,
            adharcardBackpic: backUpload.secure_url

        })
        await savedb.save()

        console.log(savedb, 'savedb')
        res.status(200).json({
            message: "Upload success",
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
};

// get ALL 
const getall = async (req, res) => {
    try {
        const GetData = await userSchemas.find({})

        return res.status(200).json({ message: GetData })

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: error.message })
    }
}



// update vrfy fucntion

const updateByUserById = async (req, res) => {
    try {
        const { update } = req.body
        console.log(update.byid, 'updateInfo json data')
        console.log(update.vrfuser, 'updateInfo json data')
        console.log(typeof (update.vrfuser))
        if (!update) {
            console.log("updateInfo is not comming")
        }


        const upd = await userSchemas.findByIdAndUpdate(
            update.byid,
            { $set: { isVerify_user: Boolean(true) } },
            { new: true, runValidators: true }
        );
        console.log(upd)
        return res.status(200).json({ message: "User is vrfyed" })
    }
    catch (err) {
        console.log(err.message, 'err.message')
        return res.status(500).json({ message: err.message })
    }
}
module.exports = { fileUploadController, getall, updateByUserById };
