const postRegister = async (req, res) => {
  res.status(200).send("Register has been Done!");
};

const postLogin = async (req, res) => {
  res.status(200).send("Login has been Done!");
};

module.exports = { postLogin, postRegister };
