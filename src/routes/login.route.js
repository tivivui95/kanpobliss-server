const loginController = require("./../controllers/login.controller");
const author = require("./../authoration/authorRole.auth");
const router = require("express").Router();
router.post("/login", author, loginController.login);
module.exports = router;
