const jwt = require("jsonwebtoken");
const { response } = require("express");
const models = require("../models");
const { verifyPassword } = require("../helpers/auth");

class AuthController {
  static login = async (req, res) => {
    try {
      const user = await models.user.findOneByEmail(req.body.email);
      if (!user[0]) {
        return res.status(400).send("Invalid credentials. Please try again.");
      }

      const checkPassword = await verifyPassword(
        req.body.password,
        user[0].hashed_password
      );
      if (!checkPassword) {
        return res.status(400).send("Incorrect credentials. Please try again.");
      }
      const userInfos = await models.user.findUser(user[0].id);

      const token = jwt.sign(
        {
          user_id: user.id,
          user_firstname: user.firstname,
          user_lasttname: user.lastname,
          email: user.email,
        },
        process.env.PRIVATETOKEN
      );
      return res
        .status(200)
        .cookie("user_token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        })
        .json({
          ...userInfos[0],
        });
    } catch (err) {
      console.error(err);
      return response.status(401).send(err);
    }
  };
}

module.exports = AuthController;
