const ProductModel = require("../model/productModel");

const getProd = async (req, res) => {
  try {
    const allProd = await ProductModel.find({});
    res.status(200).send(allProd);
  } catch (error) {
    res.status(500).send("Finding error to get all products");
  }
};

const postProd = async (req, res) => {
  try {
    const newProd = new ProductModel(req.body);
    await newProd.save(newProd);
    res.status(200).send(newProd);
  } catch (error) {
    res.status(500).send("Finding error to post a product");
  }
};

const updateProd = async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await ProductModel.findByIdAndUpdate({ _id: ID }, payload);
    res.status(200).send({ msg: "Successfully Updated" });
  } catch (error) {
    res.status(500).send("Facing issue to update a product");
  }
};

const deleteProd = async (req, res) => {
  const ID = req.params.id;
  try {
    await ProductModel.findByIdAndDelete({ _id: ID });
    res.status(200).send({ msg: "Successfully Deleted" });
  } catch (error) {
    res.status(500).send("Facing issue to Delete a product");
  }
};

module.exports = { getProd, postProd, updateProd, deleteProd };
