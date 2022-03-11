const authen = require("../authentication/authenCreateAccount");
const hash = require("../authentication/hashPassword");
const accountsModel = require("../models/accounts.model");
const authenUpdateAccount = require("./../authentication/authenUpdateAccount");
class Accounts {
  createAccounts = async ({
    fullname,
    email,
    phone,
    username,
    re_password,
    password,
    role,
    avatar,
  }) => {
    try {
      const result = await authen.authenCreateAccounts({
        fullname,
        email,
        phone,
        username,
        re_password,
        password,
        role,
        avatar,
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
      if (avatar) {
        await accountsModel.create({
          fullname,
          email,
          phone,
          username,
          password,
          role,
          avatar,
        });
      } else {
        await accountsModel.create({
          fullname,
          email,
          phone,
          username,
          password,
          role,
        });
      }
      return {
        statusCode: 200,
        message: `create account successfully !`,
      };
    } catch (error) {
      console.log(error);
    }
  };
  destroyAccount = async (id) => {
    const findAccount = await accountsModel.findOne({ _id: id });
    try {
      if (findAccount) {
        await accountsModel.deleteOne({ _id: id });
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
  updateAccount = async ({
    email,
    password,
    username,
    phone,
    fullname,
    id,
    role,
    re_password,
    avatar,
  }) => {
    try {
      if (!password) {
        let result;
        const resultAuth = await authenUpdateAccount.authenUpdateAccount({
          email,
          username,
          phone,
          fullname,
          id,
          role,
        });
        if (resultAuth.error) {
          result = resultAuth;
        } else {
          if (avatar) {
            await accountsModel.findByIdAndUpdate(id, {
              email,
              username,
              phone,
              fullname,
              id,
              role,
              avatar,
            });
          } else {
            await accountsModel.findByIdAndUpdate(id, {
              email,
              username,
              phone,
              fullname,
              id,
              role,
            });
          }
          result = {
            statusCode: 200,
            message: `update account success `,
          };
        }
        return result;
      }
      const result = await authen.authenCreateAccounts({
        fullname,
        email,
        phone,
        username,
        re_password,
        password,
        role,
      });

      if (result.error) {
        return result;
      }
      const hashPasswordResult = await hash.hassPassword(password);
      password = hashPasswordResult;
      await accountsModel.findByIdAndUpdate(id, {
        email,
        password,
        username,
        phone,
        fullname,
        id,
        role,
      });
      return {
        statusCode: 200,
        message: `update account success `,
      };
    } catch (error) {
      return {
        statusCode: 400,
        message: `update account fail `,
      };
    }
  };
  getAllAccounts = async (id) => {
    const paginate = 10;
    const allAccounts = await accountsModel
      .find({})
      .skip((id - 1) * paginate)
      .limit(paginate);
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
