const recommendModel = require("./../models/recommend.model");
const recommendCotroller = require("./../controllers/recommend.cotroller");
const upload = require("./../helpers/uploadFile");
const router = require("express").Router();
router.post(
  "/recommend/create",
  upload.array("file"),
  recommendCotroller.create
);
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
router.get("/recommend", async (req, res) => {
  const result = await recommendModel.find({}).populate("idPartner");
  return res.json(result);
});
router.put("/recommend/update", recommendCotroller.updateRecommend);
module.exports = router;
