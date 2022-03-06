const accountsServer = require("../services/account.service");
class Accounts {
  createAccount = async (req, res) => {
    const { fullname, email, phone, username, re_password, password, role } =
      req.body;
    const result = await accountsServer.createAccounts({
      fullname,
      email,
      phone,
      username,
      re_password,
      password,
      role,
    });
    if (result.error) {
      console.log(result);
      return res.json({
        statusCode: 400,
        message: result.error.details[0].message,
      });
    }
    return res.json({
      result,
    });
  };
  destroyAccount = async (req, res) => {
    const { id } = req.params;
    if (id) {
      const result = await accountsServer.destroyAccount(id);
      return res.json({ result });
    }
  };
  updateAccount = async (req, res) => {
    const {
      email,
      password,
      username,
      phone,
      fullname,
      id,
      role,
      re_password,
    } = req.body;
    const result = await accountsServer.updateAccount({
      email,
      password,
      username,
      phone,
      fullname,
      id,
      role,
      re_password,
    });
    return res.json({ result });
  };
  getAllAccounts = async (req, res) => {
    const id = req.params.id ? req.params.id : 1;
    const result = await accountsServer.getAllAccounts(id);
    return res.json({ result });
  };
}
module.exports = new Accounts();
