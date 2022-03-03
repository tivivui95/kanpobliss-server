const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: "string",
  createdAt: {
    type: Date,
    default: Date.now,
  },

  updateAt: {
    type: Date,
    default: Date.now,
  },
});
const types = mongoose.model("types", schema);
module.exports = types;
