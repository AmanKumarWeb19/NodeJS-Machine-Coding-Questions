const UserModel = require("../model/UserModel");

const postRegister = async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.status(200).send({ msg: "Register has been Done!" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email, password });
    user.length > 0
      ? res.status(200).send({ msg: "login successfull!" })
      : res.status(400).send({ msg: "login failed!" }); 
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

module.exports = { postLogin, postRegister };
