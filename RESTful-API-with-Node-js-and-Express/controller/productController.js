const ProductModel = require("../model/productModel");

const getProduct = async (req, res) => {
  try {
    const allProduct = await ProductModel.find({});
    res.status(200).send(allProduct);
  } catch (error) {
    res.status(500).send("Something went wrong to see all products");
  }
};

const postProduct = async (req, res) => {
  try {
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.status(200).send(newProduct);
  } catch (error) {
    res.status(500).send("Something went wrong to post the new products");
  }
};

const updateProduct = (req, res) => {
  try {
  } catch (error) {}
};

const deleteProduct = (req, res) => {
  try {
  } catch (error) {}
};

module.exports = { getProduct, postProduct, updateProduct, deleteProduct };
