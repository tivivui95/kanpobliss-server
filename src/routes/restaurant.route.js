const restaurantController = require("./../controllers/restaurant.controller");
const router = require("express").Router();
router.post("/Restaurant/create", restaurantController.create);
router.get("/restaurant/getAll", restaurantController.getAll);
router.get("/restaurant/:id", restaurantController.getDetailsRestaurant);
router.put("/restaurant/update", restaurantController.updateRes);
router.delete("/restaurant/delete/:id", restaurantController.deleteRes);

module.exports = router;
