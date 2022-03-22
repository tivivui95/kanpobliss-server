const spaService = require("./../services/restaurant.service");
class Spa {
  create = async (req, res) => {
    const { idResOrSpa, name, arrType, description, benefit } = req.body;
    const result = await spaService.create({
      idResOrSpa,
      name,
      arrType,
      description,
      benefit,
    });
    return res.json({ result });
  };
  getAll = async (req, res) => {
    const result = await spaService.getAll();
    return res.json({ result });
  };
  getDetailsSpa = async (req, res) => {
    const { id } = req.params;
    const result = await spaService.getDetailsSpa(id);
    return res.json({ result });
  };
  updateSpa = async (req, res) => {
    const { name, arrType, description, benefit, id } = req.body;
    const result = await spaService.updateSpa({
      name,
      arrType,
      description,
      benefit,
      id,
    });
    return res.json({ result });
  };
  deleteSpa = async (req, res) => {
    const { id } = req.params;
    const result = await spaService.deleteSpa(id);
    return res.json({ result });
  };
}
module.exports = new Spa();
