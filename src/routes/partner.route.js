const router = require("express").Router();
const upload = require("./../helpers/uploadFile");
const partnerController = require("./../controllers/partner.controller");
router.post(
  "/partner/create",
  upload.array("file"),
  partnerController.createPartner
);
router.delete("/partner/delete/:id", partnerController.deletePartner);
router.put("/partner/update", partnerController.updatePartner);
router.get("/partner/getAll/:id", partnerController.getAllPartner);
module.exports = router;
