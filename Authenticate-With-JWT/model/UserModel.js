const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    age: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("authuser", userSchema);

module.exports = UserModel;
