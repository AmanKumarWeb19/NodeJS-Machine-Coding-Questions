const express = require("express");
const {
  getProduct,
  postProduct,
  updateProduct ,
  deleteProduct,
} = require("../controller/productController");

const ProductRouter = express.Router();

ProductRouter.get("/", getProduct);

ProductRouter.post("/", postProduct);

ProductRouter.patch("/:id", updateProduct);

ProductRouter.delete("/:id", deleteProduct);

module.exports = ProductRouter;
