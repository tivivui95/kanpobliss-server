const router = require("express").Router();
const upload = require("./../helpers/uploadFile");
const hotelController = require("./../controllers/hotels.controller");
router.post("/hotel/create", upload.array("file"), hotelController.createHotel);
router.delete("/hotel/delete/:id", hotelController.destroyHotel);
router.put("/hotel/update", hotelController.updateHotel);
router.get("/hotel/getAll/:id", hotelController.getAllHotel);
module.exports = router;
