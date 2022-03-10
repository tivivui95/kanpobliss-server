const loginService = require("./../services/login.service");
class Login {
  login = async (req, res) => {
    const { email, password, quiz } = req.body;
    console.log(req.body);
    const result = await loginService.login({ email, password, quiz });
    return res.json({ result });
  };
}
module.exports = new Login();
