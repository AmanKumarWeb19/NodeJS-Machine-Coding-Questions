const express = require("express");
const connection = require("./config/db");
const prodRouter = require("./routes/ProdRouter");
require("dotenv").config();

const app = express();

app.use(express.json());



app.use("/product", prodRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    console.log("Error While Connected to DB");
  }
  console.log(`server is running at port ${process.env.PORT}`);
});
