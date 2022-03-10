const accountModel = require("./../models/accounts.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
class Login {
  login = async ({ email, password, quiz }) => {
    try {
      if (!email || !password) {
        return {
          statusCode: 400,
          message: `Email and Password cannot empty`,
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
      if (quiz) {
        findAccount.quiz = quiz;
        findAccount.save();
      }
      var token = await jwt.sign(
        { _id, role, fullname, username, phone },
        process.env.SECRET_KEY
      );

      if (result) {
        delete findAccount.password;
        return {
          statusCode: 200,
          message: `Login Successfully `,
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
