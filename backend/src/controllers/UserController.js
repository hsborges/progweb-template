const mongoose = require("mongoose");
const { v1: uuidv1 } = require("uuid");

const User = mongoose.model("User");
const Product = mongoose.model("Product");

module.exports = {
  async show(req, res) {
    try {
      const user = await User.findOne({ nickname: req.params.nick }).select(
        "-password"
      );

      if (user) {
        return res.json(user);
      }

      return res
        .status(500)
        .json({ success: false, message: "Erro ao buscar usuário" });
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json({ success: false, message: "Erro ao buscar usuário" });
    }
  },

  async update(req, res) {
    const { phone: phoneUpdated, name: nameUpdated } = req.body;
    try {
      const currentUser = await User.findById(req.params.id);

      let phone = phoneUpdated;
      let name = nameUpdated;

      if (!phoneUpdated) {
        phone = currentUser.phone;
      }
      if (!nameUpdated) {
        name = currentUser.name;
      }

      const user = await User.findByIdAndUpdate(
        req.params.id,
        { phone, name },
        {
          new: true,
        }
      );

      await Product.update(
        { seller: user.nickname },
        { sellerPhone: phoneUpdated }
      );

      return res.json({
        success: true,
        message: "Usuário atualizado",
        userId: user.id,
      });
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json({ success: false, message: "Erro ao atualizar usuário" });
    }
  },

  async store(req, res) {
    try {
      const user = await User.create(req.body);

      return res.json({
        success: true,
        message: "Usuário criado",
        userId: user.id,
      });
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json({ success: false, message: "Erro ao criar usuário" });
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
              phone: user.phone,
            },
          });
        }

        return res
          .status(500)
          .json({ success: false, message: "Erro ao gerar token" });
      }

      return res
        .status(403)
        .json({ success: false, message: "Senha inválida" });
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json({ success: false, message: "Email ou senha incorreta" });
    }
  },

  async logout(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      const tokenUpdate = await user.update({ lastToken: "" });

      if (tokenUpdate.ok) {
        return res.json({
          success: true,
          message: "Logout efetuado com sucesso",
        });
      }

      return res
        .status(500)
        .json({ success: false, message: "Erro ao encerrar sessão" });
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json({ success: false, message: "Erro ao encerrar sessão" });
    }
  },
};
