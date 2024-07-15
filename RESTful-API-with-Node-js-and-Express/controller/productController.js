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

const updateProduct = async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await ProductModel.findByIdAndUpdate({ _id: ID }, payload);
    res.status(200).send({ msg: "Update Successfull" });
  } catch (error) {
    res.status(500).send("Something went wrong to update the products");
  }
};

const deleteProduct = async (req, res) => {
  const ID = req.params.id;
  try {
    await ProductModel.findByIdAndDelete({ _id: ID });
    res.status(200).send({ msg: "delete Successfull" });
  } catch (error) {
    res.status(500).send("Something went wrong to delete the products");
  }
};

module.exports = { getProduct, postProduct, updateProduct, deleteProduct };
