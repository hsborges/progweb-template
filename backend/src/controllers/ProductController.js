const mongoose = require("mongoose");

const Product = mongoose.model("Product");
const ProductImage = mongoose.model("ProductImage");
const FILE_PATH = "./public/files";
const fs = require("fs-extra");

module.exports = {
  async index(req, res) {
    try {
      const { page = 1, category = null, search = "", user = "" } = req.query;
      const products = await Product.paginate(
        category
          ? { category }
          : {
              title: { $regex: search, $options: "i" },
              seller: { $regex: user, $options: "i" },
            },
        {
          page,
          limit: 10,
        }
      );

      return res.json(products);
    } catch (e) {
      console.log(e);
      return res.json({ success: false, message: "Erro ao buscar produtos" });
    }
  },

  async show(req, res) {
    try {
      const product = await Product.findById(req.params.id);

      return res.json(product);
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json({ success: false, message: "Erro ao buscar produtos" });
    }
  },

  async update(req, res) {
    const {
      title: titleUpdated,
      description: descriptionUpdated,
      price: priceUpdated,
      category: categoryUpdated,
    } = req.body;

    try {
      const currentProduct = await Product.findById(req.params.id);

      let title = titleUpdated;
      let description = descriptionUpdated;
      let price = priceUpdated;
      let category = categoryUpdated;

      if (!titleUpdated) {
        title = currentProduct.title;
      }
      if (!descriptionUpdated) {
        description = currentProduct.description;
      }
      if (!priceUpdated) {
        price = currentProduct.price;
      }
      if (!categoryUpdated) {
        category = currentProduct.category;
      }

      const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
          title,
          description,
          price,
          category,
        },
        {
          new: true,
        }
      );

      return res.json(product);
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json({ success: false, message: "Erro ao atualizar produto" });
    }
  },

  async destroy(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      const image = await ProductImage.findById(product.image.id);
      await fs.remove(`${FILE_PATH}/${product.image.fileName}`);
      await image.remove();
      await product.remove();

      return res.send({ success: true, message: "Produto removido" });
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json({ success: false, message: "Erro ao remover produto" });
    }
  },

  async store(req, res) {
    try {
      const product = await Product.create(req.body);

      return res.json(product);
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json({ success: false, message: "Erro ao criar produto" });
    }
  },
};
