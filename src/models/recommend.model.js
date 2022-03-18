const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: "string",
  email: "string",
  list: [{}],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});
const recommend = mongoose.model("recommend", schema);
module.exports = recommend;
