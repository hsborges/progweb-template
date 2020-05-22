const mongoose = require("mongoose");
const { v1: uuidv1 } = require("uuid");

const User = mongoose.model("User");

module.exports = {
  async show(req, res) {
    const user = await User.findOne({ nickname: req.params.nick }).select(
      "-password"
    );

    return res.json(user);
  },

  async update(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(user);
  },

  async store(req, res) {
    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (e) {
      return res.json(e);
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      const isValid = await user.verifyPassword(req.body.password);
      if (isValid) {
        const token = `${uuidv1()}.${user.id}`;
        user.update({ lastToken: token }).then(() => {});
        return res.json({ token, isValid });
      }
      return res.json({ error: "Invalid password" });
    } catch (e) {
      return res.json(e);
    }
  },

  async logout(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      user.update({ lastToken: null }).then(() => {});
      return res.json({ message: "Logout successful!" });
    } catch (e) {
      return res.json(e);
    }
  },
};
