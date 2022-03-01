const authen = require("./../authentication/authenCreateAccount");
const hash = require("./../authentication/hashPassword");
const accountsModel = require("./../models/accounts.model");
class Accounts {
  createAccounts = async ({
    fullname,
    email,
    phone,
    username,
    re_password,
    password,
  }) => {
    const result = await authen.authenCreateAccounts({
      fullname,
      email,
      phone,
      username,
      re_password,
      password,
    });
    if (result.error) {
      return result;
    }
    const findAccount = await accountsModel.findOne({ email });
    if (findAccount) {
      return {
        statusCode: 403,
        message: `The account already exists in the system, please re-register`,
      };
    }
    const hashPasswordResult = await hash.hassPassword(password);
    password = hashPasswordResult;
    await accountsModel.create({
      fullname,
      email,
      phone,
      username,
      password,
    });
    return {
      statusCode: 200,
      message: `create account successfully !`,
    };
  };
  destroyAccount = async (email) => {
    const findAccount = await accountsModel.findOne({ email });
    console.log(findAccount);
    try {
      if (findAccount) {
        await accountsModel.deleteOne({ email });
        return {
          statusCode: 200,
          message: `delete accounts success <3`,
        };
      } else {
        return {
          statusCode: 403,
          message: `accounts not found !`,
        };
      }
    } catch (error) {
      return {
        statusCode: 400,
        message: error,
      };
    }
  };
  updateAccount = async ({ email, password, username, phone, fullname }) => {
    const findAccount = await accountsModel.findOne({ email });
    try {
      if (findAccount) {
        await accountsModel.updateOne({
          email,
          password,
          username,
          phone,
          fullname,
        });
      }
      return {
        statusCode: 200,
        message: `update account success !`,
      };
    } catch (error) {
      return {
        statusCode: 400,
        message: `update account fail !`,
      };
    }
  };
  getAllAccounts = async () => {
    const allAccounts = await accountsModel.find({});
    try {
      if (allAccounts) {
        return {
          statusCode: 200,
          accounts: allAccounts,
        };
      }
    } catch (error) {
      return {
        statusCode: 400,
        message: `get all accounts fail !`,
      };
    }
  };
}
module.exports = new Accounts();
