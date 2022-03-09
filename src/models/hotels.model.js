const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: "string",
  location: "string",
  phone: "string",
  email: "string",
  qr: "string",
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});
const hotels = mongoose.model("hotels", schema);
module.exports = hotels;
