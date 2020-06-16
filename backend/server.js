const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://growx:p0o9i8u7@cluster0-unkxt.mongodb.net/minha-lojinha?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
requireDir("./src/models");

app.use("/public/files", express.static("public/files"));
app.use("/api", require("./src/routes"));

app.listen(3001);
