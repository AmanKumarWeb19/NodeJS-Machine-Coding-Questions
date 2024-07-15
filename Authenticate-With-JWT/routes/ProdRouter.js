const express = require("express");
const {
  getProd,
  postProd,
  updateProd,
  deleteProd,
} = require("../controller/prodController");

const prodRouter = express.Router();

prodRouter.get("/", getProd);

prodRouter.post("/", postProd);

prodRouter.patch("/:id", updateProd);

prodRouter.delete("/:id", deleteProd);

module.exports = prodRouter;
