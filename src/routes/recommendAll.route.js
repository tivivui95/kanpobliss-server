const recommendAllCotroller = require("./../controllers/recommendAll.cotroller");
const router = require("express").Router();
router.post("/recommend/all/create", recommendAllCotroller.create);

module.exports = router;
