const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  idResOrSpa: String,
  arrType: [],
  typeName: String,
  benefit: String,
  name: String,
  description: String,
  images: [],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});
const spa = mongoose.model("spa", schema);
module.exports = spa;
