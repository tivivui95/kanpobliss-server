const router = require("express").Router();
const typeController = require("./../controllers/types.controller");
router.post("/type/create", typeController.createType);
router.get("/type/getAll", typeController.getAllType);
router.put("/type/update", typeController.updateType);
router.delete("/type/delete/:id", typeController.deleteType);

module.exports = router;
