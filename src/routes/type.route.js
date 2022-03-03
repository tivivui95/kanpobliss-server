const router = require("express").Router();
const typeController = require("./../controllers/types.controller");
router.post("/type/create", typeController.createType);
router.get("/type/getAll", typeController.getAllType);

module.exports = router;
