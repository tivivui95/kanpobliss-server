const hotelService = require("../services/hotel.service");
class Hotel {
  createHotel = async (req, res) => {
    const image = [];
    console.log(req.files);
    if (req.files) {
      req.files.forEach((file) => {
        const obj = {
          name: `${process.env.URL_LOCALHOST}/image/${file.filename}`,
        };
        image.push(obj);
      });
      return res.json({ image });
    }
    const { name, location, phone, email, qr, images } = req.body;
    console.log(qr);
    const result = await hotelService.createHotel({
      name,
      location,
      phone,
      email,
      qr,
      images,
    });
    return res.json({
      result,
    });
  };
  destroyHotel = async (req, res) => {
    const { id } = req.params;
    const result = await hotelService.destroyeHotel(id);
    return res.json({
      result,
    });
  };
  updateHotel = async (req, res) => {
    const { id, name, location, phone } = req.body;
    console.log(id, name, location, phone);
    const result = await hotelService.updateHotel({
      id,
      name,
      location,
      phone,
    });
    return res.json({ result });
  };
  getAllHotel = async (req, res) => {
    const id = req.params.id ? req.params.id : 1;
    const result = await hotelService.getAllHotels(id);
    return res.json({ result });
  };
}
module.exports = new Hotel();
