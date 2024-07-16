const express = require("express");
const { postRegister, postLogin } = require("../controller/userController");

const userRouter = express.Router();

userRouter.post("/register", postRegister);

userRouter.post("/login", postLogin);

module.exports = userRouter;
