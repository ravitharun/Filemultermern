const fileUploadControllerThree = (req, res) => {
    try {

        if (!req.files || req.files.length == 0) {
            console.log('No files uploaded')
            return res.status(400).json({ message: "No files uploaded" });
        }
        console.log(req.files.length); // array of uploaded files
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