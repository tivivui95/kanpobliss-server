const authenToken = require("./../authentication/authenToken");
const accounts = require("./../controllers/accounts.controller");
const upload = require("./../helpers/uploadFile");
const router = require("express").Router();
router.post("/account/create", upload.single("file"), accounts.createAccount);
router.delete("/account/delete/:id", accounts.destroyAccount);
router.put("/account/update", accounts.updateAccount);
router.get("/account/getAll/:id", authenToken, accounts.getAllAccounts);
module.exports = router;
