const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  fullname: "string",
  email: "string",
  phone: "string",
  username: "string",
  password: "string",
});
const accounts = mongoose.model("accounts", schema);
module.exports = accounts;
