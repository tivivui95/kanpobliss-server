const mongoose = require("mongoose");
require("dotenv").config();
module.exports = {
  connect: () => {
    mongoose
      .connect(process.env.URL_MONGODB)
      .then(() => {
        console.log(`connect to database success on db name booking `);
      })
      .catch(() => {
        console.log(`connect to database fail`);
      });
  },
};
