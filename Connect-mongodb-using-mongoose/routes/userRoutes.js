const express = require("express");
const UserModel = require("../model/UserModel/UserModel");
const { getUser, postUser } = require("../Controller/UserController");

const UserRouter = express.Router();

UserRouter.get("/", getUser);

UserRouter.post("/", postUser);

module.exports = UserRouter;
