const recommendService = require("./../services/recommend.service");
class Recommend {
  create = async (req, res) => {
    try {
      const arr = req.body;
      const result = await recommendService.create(arr);
      return res.json(result);
    } catch (error) {
      console.log(error);
    }
  };
  getAllRecommend = async (req, res) => {
    try {
      const result = await recommendService.getAllRecommend();
      return res.json(result);
    } catch (error) {
      console.log(error);
    }
  };
  deleteChildren = async (req, res) => {
    try {
      const { id, idC } = req.params;
      const result = await recommendService.deleteChildren(id, idC);
      return res.json(result);
    } catch (error) {
      console.log(error);
    }
  };

  updateChildren = async (req, res) => {
    const { id, idC } = req.params;
    const obj = req.body;
    const result = await recommendService.updateChildren(id, idC, obj);
    return res.json(result);
  };
  updateRecommend = async (req, res) => {
    try {
      const { nameR, idR, email } = req.body;
      const result = await recommendService.updateRecommend(nameR, idR, email);
      return res.json(result);
    } catch (error) {
      console.log(error);
    }
  };
  deleteRecommendReal = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await recommendService.deleteRecommendReal(id);
      return res.json(result);
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = new Recommend();
