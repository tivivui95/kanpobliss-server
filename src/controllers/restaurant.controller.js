const restaurant = require("../models/restaurant.model");
const restaurantService = require("./../services/restaurant.service");
class Restaurant {
  create = async (req, res) => {
    const { idResOrSpa, name, arrType, description, benefit, images } =
      req.body;
    const result = await restaurantService.create({
      idResOrSpa,
      name,
      arrType,
      description,
      benefit,
      images,
    });
    return res.json({ result });
  };
  getAll = async (req, res) => {
    const result = await restaurantService.getAll();
    return res.json({ result });
  };
  getDetailsRestaurant = async (req, res) => {
    const { id } = req.params;
    let result = await restaurantService.getDetailsRestaurant(id);
    console.log(result);
    return res.json({ result });
  };
  updateRes = async (req, res) => {
    const { name, arrType, description, benefit, id, images } = req.body;
    const result = await restaurantService.updateRes({
      name,
      arrType,
      description,
      benefit,
      id,
      images,
    });
    return res.json({ result });
  };
  deleteRes = async (req, res) => {
    const { id } = req.params;
    const result = await restaurantService.deleteRes(id);
    return res.json({ result });
  };
}
module.exports = new Restaurant();
