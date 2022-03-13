const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: "string",
  location: "string",
  phone: "string",
  images: [
    {
      name: String,
    },
  ],
  recommend: [
    {
      name: {
        type: String,
      },
      list: [
        {
          ingredient: "string",
          dishes: "string",
          price: "string",
          images: [
            {
              name: String,
            },
          ],
          reason: "string",
        },
      ],
      description: "string",
    },
  ],

  email: "string",
  idHotel: "string",
  type: [{ type: String }],
  updateAt: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const partners = mongoose.model("partners", schema);
module.exports = partners;
