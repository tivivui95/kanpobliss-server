const accountsServer = require("../services/account.service");
class Accounts {
  createAccount = async (req, res) => {
    try {
      const {
        fullname,
        email,
        phone,
        username,
        re_password,
        password,
        role,
        avatar,
      } = req.body;
      if (req.file) {
        let avatar = `https://booking-server-project.herokuapp.com/image/${req.file.filename}`;
        return res.json({ avatar });
      }
      const result = await accountsServer.createAccounts({
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
        return res.json({
          statusCode: 400,
          message: result.error.details[0].message,
        });
      }
    } catch (error) {
      console.log(error);
    }

    return res.json({
      result,
    });
  };
  destroyAccount = async (req, res) => {
    try {
      const { id } = req.params;
      if (id) {
        const result = await accountsServer.destroyAccount(id);
        return res.json({ result });
      }
    } catch (error) {
      console.log(error);
    }
  };
  updateAccount = async (req, res) => {
    try {
      const {
        email,
        password,
        username,
        phone,
        fullname,
        id,
        role,
        re_password,
        avatar,
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
        avatar,
      });
      return res.json({ result });
    } catch (error) {
      console.log(error);
    }
  };
  getAllAccounts = async (req, res) => {
    try {
      const id = req.params.id ? req.params.id : 1;
      const result = await accountsServer.getAllAccounts(id);
      return res.json({ result });
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = new Accounts();
