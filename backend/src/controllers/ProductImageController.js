const mongoose = require("mongoose");
const multer = require('multer');
const path = require('path');

/** Storage Engine */
const storageEngine = multer.diskStorage({
  destination: './public/files',
  filename: function (req, file, fn) {
    fn(null, new Date().getTime().toString() + '-' + file.fieldname + path.extname(file.originalname));
  }
});

const ProductImage = mongoose.model("ProductImage");

module.exports = {
  async show(req, res) {
    const image = await ProductImage.findById(req.params.id);

    return res.json(image);
  },

  async update(req, res) {
    const image = await ProductImage.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(image);
  },

  async destroy(req, res) {
    await ProductImage.findByIdAndRemove(Wreq.params.id);
    /* TODO: Remove file from folder */
    return res.send();
  },

  async store(req, res) {
    const image = await ProductImage.create(req.body);
    var fullPath = "files/" + req.params.id + "/" + req.file.filename;
    var document = {
      path: fullPath,
      caption: req.body.caption
    };

    var photo = new ProductImage(document);
    photo.save(function (error) {
      if (error) {
        throw error;
      }
    });
    return res.json(image);
  },

  async upload(req, res) {
    ProductImage.upload = multer({
      storage: storageEngine,
      limits: { fileSize: 200000 },
      fileFilter: function (req, file, callback) {
        validateFile(file, callback);
      }
    }).single('photo');
    var validateFile = function (file, cb) {
      allowedFileTypes = /jpeg|jpg|png|gif/;
      const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
      const mimeType = allowedFileTypes.test(file.mimetype);
      if (extension && mimeType) {
        return cb(null, true);
      } else {
        cb("Invalid file type. Only JPEG, PNG and GIF file are allowed.")
      }
    }

  }
};
