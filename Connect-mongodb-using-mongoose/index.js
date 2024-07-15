/** Question: Create a Node.js application that connects to a MongoDB database using Mongoose. Define a simple schema for a User model with fields name and email, and implement a function to add a new user to the database. */

const express = require("express");
const connection = require("./config/db");
const UserRouter = require("./routes/userRoutes");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send({ msg: "Home Page" });
});

app.use("/user", UserRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connetion DB Successfully");
  } catch (error) {
    console.log(error);
    console.log("error while connecting to db");
  }
  console.log(`Server is running at port ${process.env.PORT}`);
});
