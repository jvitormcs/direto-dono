const jwt = require("jsonwebtoken");

const User = require("../models/tb001_user");

// get user by jwt token
const getUserByToken = async (token) => {
  if (!token) return res.status(401).json({ error: "Acesso negado!" });

  // find user
  const decoded = jwt.verify(token, "lnalsndkalihasbucba");

  const userId = decoded.id;

  const user = await User.findOne({ id_user: userId });

  return user;
};

module.exports = getUserByToken;
