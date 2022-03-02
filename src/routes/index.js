const accounts = require("./accounts.route");
const hotels = require("./hotel.route");
module.exports = {
  run: (app) => {
    app.use("/", accounts);
    app.use("/", hotels);
  },
};
