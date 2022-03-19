const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    ref: "Recommend",
  },
  name: {
    type: String,
  },
  location: "string",
  phone: "string",
  images: [
    {
      name: String,
    },
  ],
  idHotel: {
    type: "string",
  },
  type: [{ type: String }],
  email: {
    type: String,
  },
  recommend: {
    type: String,
    ref: "Recommend",
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const partners = mongoose.model("Partner", schema);
module.exports = partners;
