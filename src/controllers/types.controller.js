const typeService = require("./../services/type.service");
class Type {
  createType = async (req, res) => {
    const { name } = req.body;
    const result = await typeService.createType(name);
    return res.json({
      result,
    });
  };
  getAllType = async (req, res) => {
    const result = await typeService.getAllType();
    return res.json({ result });
  };
  updateType = async (req, res) => {
    const { id, name } = req.body;
    const result = await typeService.updateType({ id, name });
    return res.json({ result });
  };
  deleteType = async (req, res) => {
    const { id } = req.params;
    const result = await typeService.deleteType(id);
    return res.json({ result });
  };
}
module.exports = new Type();
