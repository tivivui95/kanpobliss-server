const accounts = require("./../controllers/accounts.controller");
const router = require("express").Router();
router.post("/account/create", accounts.createAccount);
router.delete("/account/delete", accounts.destroyAccount);
router.patch("/account/update", accounts.updateAccount);
router.get("/account/getAll", accounts.getAllAccounts);
module.exports = router;
