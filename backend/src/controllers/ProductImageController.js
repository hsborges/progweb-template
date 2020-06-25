const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const ProductImage = mongoose.model("ProductImage");
const FILE_PATH = "./public/files";

/** Storage Engine */
const storageEngine = multer.diskStorage({
  destination: FILE_PATH,
  filename: (req, file, fn) => {
    fn(null, new Date().getTime().toString() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storageEngine,
  fileFilter: (req, file, callback) => {
    const allowedFileTypes = /jpeg|jpg|png|gif/;
    const extension = allowedFileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimeType = allowedFileTypes.test(file.mimetype);
    if (extension && mimeType) {
      callback(null, true);
    } else {
      return callback(
        "Invalid file type. Only JPEG, PNG and GIF file are allowed.",
        false
      );
    }
  },
}).single("image");

module.exports = {
  async upload(req, res) {
    upload(req, res, async (err) => {
      if (err || err instanceof multer.MulterError) {
        return res.status(500).json({ success: false, message: err });
      }

      try {
        const image = await ProductImage.create({
          path: req.file.path,
          fileName: req.file.filename,
        });

        return res.json({
          id: image.id,
          path: image.path,
          fileName: image.fileName,
        });
      } catch (e) {
        console.log(e);
        return res
          .status(500)
          .json({ success: false, message: "Erro ao fazer upload da imagem" });
      }
    });
  },
};
