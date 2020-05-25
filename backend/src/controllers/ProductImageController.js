const mongoose = require("mongoose");

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
    await ProductImage.findByIdAndRemove(req.params.id);
    /* TODO: Remove file from folder */
    return res.send();
  },

  async store(req, res) {
    const image = await ProductImage.create(req.body);

    return res.json(image);
  },
};
