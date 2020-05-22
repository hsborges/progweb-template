const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: true
  },
  seller: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model("Product", ProductSchema);
