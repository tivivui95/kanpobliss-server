const accountModel = require("./../models/accounts.model");
module.exports = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({
        result: {
          statusCode: 400,
          message: `Your account does not have enough access rights!!!`,
        },
      });
    }
    const findAccount = await accountModel.findOne({ email });
    if (!findAccount) {
      return res.json({
        result: {
          statusCode: 400,
          message: "Account does not exist in the system !",
        },
      });
    }
    if (findAccount.role !== "admin") {
      return res.json({
        result: {
          statusCode: 400,
          message: `Your account does not have enough access rights!!!`,
        },
      });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
