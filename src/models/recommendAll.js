const mongoose = require("mongoose");
let counter = 1;
let CountedId = { type: Number, default: () => counter++ };
const schema = new mongoose.Schema({
  name: {
    type: String,
    ref: "Partner",
  },
  number: CountedId,
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
const recommendAll = mongoose.model("RecommendAll", schema);
module.exports = recommendAll;
