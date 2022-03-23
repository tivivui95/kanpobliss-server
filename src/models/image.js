const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  image: {
    type: String,
  },
  idRef: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});
const images = mongoose.model("images", schema);
module.exports = images;
