const UserModel = require("../model/UserModel/UserModel");

const getUser = async (req, res) => {
  try {
    const allUser = await UserModel.find({});
    res.status(200).send(allUser);
  } catch (error) {
    res.status(500).send({ msg: "All the user not found" });
  }
};

const postUser = async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    await newUser.save(newUser);
    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).send({ msg: "Something Went Wrong in PostUser part" });
  }
};

module.exports = { getUser, postUser };
