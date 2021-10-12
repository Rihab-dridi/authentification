const jwt = require("jsonwebtoken");
const User = require("../Models/Users");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers["auth-token"];
    //check the existance of the token
    if (!token)
      return res.status(404).json({ msg: "user not authentificated" });

    //decode the token
    const decodedToken = await jwt.verify(token, process.env.PASS_TOKEN);

    //find this specific user
    const user = await User.findById(decodedToken.id);

    //check for the user
    if (!user) return res.status(404).json({ msg: "user not found " });

    //create user
    req.user = user;

    next();
  } catch (error) {
    res.status(400).json({ msg: "user is not authorized" });
  }
};
module.exports = isAuth;
