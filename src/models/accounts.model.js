const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  fullname: "string",
  email: "string",
  phone: "string",
  username: "string",
  password: "string",
  role: {
    type: "string",
    default: "customer",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});
const accounts = mongoose.model("accounts", schema);
module.exports = accounts;
