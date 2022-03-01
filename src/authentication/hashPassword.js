const bcrypt = require("bcrypt");
module.exports = {
  hassPassword: async (password) => {
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  },
};
