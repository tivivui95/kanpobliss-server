const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  fullname: "string",
  email: "string",
  phone: "string",
  username: "string",
  password: "string",
  quiz: [
    {
      name: String,
      result: Boolean,
    },
  ],
  avatar: {
    type: String,
    default:
      "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
  },
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
