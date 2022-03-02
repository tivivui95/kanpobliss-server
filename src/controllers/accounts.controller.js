const accountsServer = require("./../services/accounts.service");
class Accounts {
  createAccount = async (req, res) => {
    console.log("xxx");
    const { fullname, email, phone, username, re_password, password } =
      req.body;
    const result = await accountsServer.createAccounts({
      fullname,
      email,
      phone,
      username,
      re_password,
      password,
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
    console.log(123);
    const { email, password, username, phone, fullname, id } = req.body;
    const result = await accountsServer.updateAccount({
      email,
      password,
      username,
      phone,
      fullname,
      id,
    });
    return res.json(result);
  };
  getAllAccounts = async (req, res) => {
    const id = req.params.id ? req.params.id : 1;
    const result = await accountsServer.getAllAccounts(id);
    return res.json({ result });
  };
}
module.exports = new Accounts();
