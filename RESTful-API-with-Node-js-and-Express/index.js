/** - **Creating a RESTful API:**
    - **Question:** Build a RESTful API with Node.js and Express that performs CRUD operations on a `Product` resource. Implement endpoints for creating, reading, updating, and deleting products. */

const express = require("express");
const connection = require("./config/db");
const ProductRouter = require("./routes/ProductRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/product", ProductRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    Console.log(error.message);
    console.log("Error while connecting DB");
  }
  console.log("Server is running at 8080");
});
