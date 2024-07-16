/** - **User Authentication with JWT:**
    - **Question:** Implement a user authentication system using JWT in a Node.js application. Create endpoints for user registration, login, and a protected route that requires a valid JWT token to access. */

const express = require("express");
const connection = require("./config/db");
const prodRouter = require("./routes/ProdRouter");
const userRouter = require("./routes/UserRoutes");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/product", prodRouter);
app.use("/", userRouter);

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
