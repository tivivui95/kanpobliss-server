const accounts = require("./accounts.route");
const hotels = require("./hotel.route");
const partners = require("./partner.route");
const types = require("./type.route");
const login = require("./login.route");
module.exports = {
  run: (app) => {
    app.use("/", accounts);
    app.use("/", hotels);
    app.use("/", partners);
    app.use("/", types);
    app.use("/", login);
  },
};
