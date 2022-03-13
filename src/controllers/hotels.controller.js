const hotelService = require("../services/hotel.service");
const fs = require("fs");
class Hotel {
  createHotel = async (req, res) => {
    const image = [];
    if (req.files) {
      req.files.forEach((file) => {
        var stats = fs.statSync(`src/public/${file.filename}`);
        var fileSizeInBytes = stats.size;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        const i = parseInt(
          Math.floor(Math.log(fileSizeInBytes) / Math.log(1024))
        );
        if (i == 0) {
          console.log(bytes + " " + sizes[i]);
          return;
        }
        console.log((bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]);
        return;
        const obj = {
          name: `${process.env.URL_LOCALHOST}/image/${file.filename}`,
        };
        image.push(obj);
      });
      return res.json({ image });
    }
    const { name, location, phone, email, qr, images } = req.body;
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
