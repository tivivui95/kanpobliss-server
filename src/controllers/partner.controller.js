const partnerService = require("./../services/partner.service");
class Partner {
  createPartner = async (req, res) => {
    const image = [];
    if (req.files) {
      req.files.forEach((file) => {
        const obj = {
          name: `${process.env.URL_LOCALHOST}/image/${file.filename}`,
        };
        image.push(obj);
      });
      return res.json({ image });
    }
    const { name, type, images, email, description, linkB } = req.body;
    console.log(name, type, images, email, description, linkB);
    const result = await partnerService.createPartner({
      name,
      type,
      images,
      email,
      description,
      linkB,
    });
    return res.json({ result });
  };
  deletePartner = async (req, res) => {
    const { id } = req.params;
    const result = await partnerService.destroyPartner(id);
    return res.json({ result });
  };
  updatePartner = async (req, res) => {
    const { name, id, type, description, linkB, images } = req.body;
    const result = await partnerService.updatePartner({
      name,
      id,
      type,
      description,
      linkB,
      images,
    });
    return res.json({ result });
  };
  getAllPartner = async (req, res) => {
    const { id } = req.params;
    const { type, email } = req.query;
    console.log(type);
    console.log(email);
    const result = await partnerService.getAllPartner(id, type, email);
    return res.json({
      result,
    });
  };
  getAll = async (req, res) => {
    const result = await partnerService.getAll();
    return res.json({
      result,
    });
  };
}
module.exports = new Partner();
