const mongoose = require("mongoose");

const ProductImageSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
});

mongoose.model("ProductImage", ProductImageSchema);
