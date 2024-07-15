const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("authuser", userSchema);

module.exports = UserModel;
