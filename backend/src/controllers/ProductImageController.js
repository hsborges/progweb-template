const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const ProductImage = mongoose.model("ProductImage");

/** Storage Engine */
const storageEngine = multer.diskStorage({
  destination: "./public/files",
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
  async show(req, res) {
    const image = await ProductImage.findById(req.params.id);

    return res.json(image);
  },

  async destroy(req, res) {
    try {
      await ProductImage.findByIdAndRemove(req.params.id);
      /* TODO: Remove file from folder */

      return res.send({ message: "Image removed" });
    } catch (e) {
      return res.send(e);
    }
  },

  async upload(req, res) {
    upload(req, res, async (err) => {
      if (err) {
        return res.json({ error: err });
      }

      console.log(req.file);

      try {
        const image = await ProductImage.create({
          path: req.file.path,
          fileName: req.file.filename,
        });

        return res.json(image);
      } catch (e) {
        return res.json(e);
      }
    });
  },
};
