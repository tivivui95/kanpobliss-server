const typeService = require("./../services/type.service");
class Type {
  createType = async (req, res) => {
    const { nameType } = req.body;
    const result = await typeService.createType(nameType);
    return res.json({
      result,
    });
  };
  getAllType = async (req, res) => {
    const result = await typeService.getAllType();
    return res.json({ result });
  };
}
module.exports = new Type();
