const hotelService = require("../services/hotel.service");
const fs = require("fs");
const axios = require('axios');
class Hotel {
  createHotel = async (req, res) => {
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
    const { name, location, phone, email, qr, images, PartnerID } = req.body;
    const result = await hotelService.createHotel({
      name,
      location,
      phone,
      email,
      qr,
      images,
      PartnerID,
    });
    return res.json({
      result,
    });
  };
  destroyHotel = async (req, res) => {
    const { id } = req.params;
    try {
      const hotelData = await axios.get('http://localhost:9000/hotel/getAll/' + id);
      const len = JSON.parse(JSON.stringify(hotelData.data.result)).hotels.length;
      for (let index = 0; index < len; index++) {
        const data = JSON.stringify(hotelData.data.result.hotels[index]);
        const newdata = JSON.parse(data);
        if (newdata._id == id) {
          const detroy = await axios.delete('http://localhost:9000/partner/delete/' + newdata.PartnerID);
        }
          
      }
    } catch (error) {
      console.log(error);
    }

    const result = await hotelService.destroyeHotel(id);

    return res.json({
      result,
    });
  };
  updateHotel = async (req, res) => {
    const { id, name, location, phone, images } = req.body;
    const result = await hotelService.updateHotel({
      id,
      name,
      location,
      phone,
      images,
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
