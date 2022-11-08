const express = require("express");
const consign = require("consign");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

consign({ cwd: "src" })
  .include("db")
  .then("model")
  .then("controller")
  .then("routas")
  .into(app);

module.exports = app;
