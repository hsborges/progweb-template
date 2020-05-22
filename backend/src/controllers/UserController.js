const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = {
  async show(req, res) {
    const user = await User.findOne({ nickname: req.params.nick });

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
      const pwd = await user.verifyPassword(req.body.password);
      return res.json({ isValid: pwd });
    } catch (e) {
      return res.json(e);
    }
  },
};
