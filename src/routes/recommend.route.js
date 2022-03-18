const recommendCotroller = require("./../controllers/recommend.cotroller");
const router = require("express").Router();
router.post("/recommend/create", recommendCotroller.create);
router.get("/recommend/getAll", recommendCotroller.getAllRecommend);
router.delete("/recommend/delete/:id", recommendCotroller.deleteRecommendReal);
router.delete(
  "/recommend/delete/children/:id/:idC",
  recommendCotroller.deleteChildren
);
router.put(
  "/recommend/update/children/:id/:idC",
  recommendCotroller.updateChildren
);
router.put("/recommend/update", recommendCotroller.updateRecommend);
module.exports = router;
