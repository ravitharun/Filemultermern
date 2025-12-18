const fileUploadController = (req, res) => {
    try {
        console.log("req.files from the profile pic", req.file)
        if (!req.file) {
            return res.status(400).json({ message: "No files uploaded" });
        }
        console.log(req.file); // array of uploaded files
        res.status(200).json(req.file);
    } catch (err) {
        console.log(err.message)
    }
};

module.exports = { fileUploadController };;
