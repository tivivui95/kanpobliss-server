const spanController = require("./../controllers/spa.controller");
const router = require("express").Router();
router.post("/Spa/create", spanController.create);
// router.get("/Spa/getAll", spanController.getAll);
router.get("/Spa/:id", spanController.getDetailsSpa);
router.put("/Spa/update", spanController.updateSpa);
router.delete("/Spa/delete/:id", spanController.deleteSpa);

module.exports = router;
