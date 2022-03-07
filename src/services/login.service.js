const accountModel = require("./../models/accounts.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
class Login {
  login = async ({ email, password }) => {
    try {
      if (!email || !password) {
        return {
          statusCode: 400,
          message: `email and password cannot empty`,
        };
      }
      const findAccount = await accountModel.findOne({ email });
      if (!findAccount) {
        return {
          statusCode: 400,
          message: "Account does not exist in the system !",
        };
      }
      if (findAccount.role !== "admin") {
        return {
          statusCode: 400,
          message: `Your account does not have enough access rights!!!`,
        };
      }
      const result = await bcrypt.compare(password, findAccount.password);
      const { _id, role, fullname, username, phone } = findAccount;
      var token = await jwt.sign(
        { _id, role, fullname, username, phone },
        process.env.SECRET_KEY,
        { expiresIn: "5p" }
      );
      if (result) {
        delete findAccount.password;
        console.log(123);
        return {
          statusCode: 200,
          message: `login success `,
          account: findAccount,
          token,
        };
      }
      return {
        statusCode: 400,
        message: "Password is incorrect, please re-enter !!!",
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 400,
        message: "Login fail !",
      };
    }
  };
}
module.exports = new Login();
