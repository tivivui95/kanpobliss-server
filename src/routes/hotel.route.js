const router = require("express").Router();
const hotelController = require("./../controllers/hotels.controller");
router.post("/hotel/create", hotelController.createHotel);
router.delete("/hotel/delete/:id", hotelController.destroyHotel);
router.put("/hotel/update", hotelController.updateHotel);
router.get("/hotel/getAll/:id", hotelController.getAllHotel);
module.exports = router;
