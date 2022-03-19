const recommendAllService = require("./../services/recommendAll.service");
class RecommendAll {
  create = async (req, res) => {
    const { name, list } = req.body;
    console.log(name, list);
    const result = await recommendAllService.create(name, list);
    return res.json(result);
  };
}
module.exports = new RecommendAll();
