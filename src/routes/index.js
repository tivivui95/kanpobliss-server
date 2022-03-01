const accounts = require("./accounts.route");
module.exports = {
  run: (app) => {
    app.use("/", accounts);
  },
};
