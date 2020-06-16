const mongoose = require("mongoose");
const { v1: uuidv1 } = require("uuid");

const User = mongoose.model("User");

module.exports = {
  async show(req, res) {
    try {
      const user = await User.findOne({ nickname: req.params.nick }).select(
        "-password"
      );

      return res.json(user);
    } catch (e) {
      return res.status(500).json(e);
    }
  },

  async update(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      return res.json({ message: "User updated!", userId: user.id });
    } catch (e) {
      return res.status(500).json(e);
    }
  },

  async store(req, res) {
    try {
      const user = await User.create(req.body);

      return res.json({ message: "User created!", userId: user.id });
    } catch (e) {
      return res.status(500).json(e);
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      const isValid = await user.verifyPassword(req.body.password);
      if (isValid) {
        const token = uuidv1();
        const tokenUpdate = await user.update({ lastToken: token });

        if (tokenUpdate.ok) {
          return res.json({
            token: `${token}.${user.id}`,
            profile: {
              id: user.id,
              name: user.name,
              email: user.email,
              nickname: user.nickname,
            },
          });
        }

        return res.status(500).json({ error: "Error saving token" });
      }

      return res.json({ error: "Invalid password" }); // TODO: Devo retornar 403?
    } catch (e) {
      return res.status(500).json(e);
    }
  },

  async logout(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      const tokenUpdate = user.update({ lastToken: null });

      if (tokenUpdate.ok) {
        return res.json({ message: "Logout successful" });
      }

      return res.status(500).json({ error: "Error removing token" });
    } catch (e) {
      return res.status(500).json(e);
    }
  },
};
