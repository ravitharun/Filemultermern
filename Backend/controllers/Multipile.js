const { cloudinary } = require("../config/Cloud");

const fileUploadControllerThree = async (req, res) => {
    try {
        if (!req.files || req.files.length == 0) {
            console.log('No files uploaded')
            return res.status(400).json({ message: "No files uploaded" });
        }
        for(let i=0;i<req.files.length;i++){

            const result = await cloudinary.uploader.upload(req.files[i].path);
            console.log(result, 'result')
        }

        const uploadedFiles = req.files.map(file => ({
            filename: file.filename,
            originalname: file.originalname,
            size: file.size,
            path: file.path
        }))
        res.json({
            message: `${req.files.length} files uploaded successfully`,
            files: uploadedFiles
        })

    } catch (err) {
        console.log(err.message)
    }
};


module.exports = { fileUploadControllerThree }