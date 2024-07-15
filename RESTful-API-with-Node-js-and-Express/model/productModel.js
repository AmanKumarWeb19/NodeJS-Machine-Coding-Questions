const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    brand: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const ProductModel = mongoose.model("productfield", productSchema);

module.exports = ProductModel;
