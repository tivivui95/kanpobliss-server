const partnerService = require("./../services/partner.service");
class Partner {
  createPartner = async (req, res) => {
    const { name, objType, phone, location, images } = req.body;
    const result = await partnerService.createPartner({
      name,
      objType,
      phone,
      location,
      images,
    });
    return res.json({ result });
  };
  deletePartner = async (req, res) => {
    const { id } = req.params;
    const result = await partnerService.destroyPartner(id);
    return res.json({ result });
  };
  updatePartner = async (req, res) => {
    const { name, id, objType, phone, location } = req.body;
    const result = await partnerService.updatePartner({
      name,
      id,
      objType,
      phone,
      location,
    });
    return res.json({ result });
  };
  getAllPartner = async (req, res) => {
    const { id } = req.params;
    const result = await partnerService.getAllPartner(id);
    return res.json({
      result,
    });
  };
}
module.exports = new Partner();
