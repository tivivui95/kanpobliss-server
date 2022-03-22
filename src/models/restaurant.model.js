const mongoose = require("mongoose");
let counter = 1;
const schema = new mongoose.Schema({
  idResOrSpa: String,
  arrType: [],
  typeName: String,
  benefit: String,
  name: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});
const restaurant = mongoose.model("restaurant", schema);
module.exports = restaurant;
