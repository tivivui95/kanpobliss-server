const restaurantController = require("./../controllers/restaurant.controller");
const router = require("express").Router();
router.post("/restaurant/create", restaurantController.create);
router.get("/restaurant/getAll", restaurantController.getAll);
router.get("/restaurant/:id", restaurantController.getDetailsRestaurant);

module.exports = router;
