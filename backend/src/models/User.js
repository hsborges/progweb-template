const mongoose = require("mongoose");
const bcrypt = require("mongoose-bcrypt");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  lastToken: {
    type: String,
    select: false,
  },
});

UserSchema.plugin(bcrypt);

mongoose.model("User", UserSchema);
