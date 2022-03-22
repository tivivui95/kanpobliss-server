const restaurantModel = require("./../models/restaurant.model");
class Spa {
  create = async ({ idResOrSpa, name, arrType, description, benefit }) => {
    try {
      await restaurantModel.create({
        idResOrSpa,
        name,
        arrType,
        description,
        benefit,
      });
      return {
        statusCode: 200,
        message: `Create Restaurant Successfully !`,
      };
    } catch (error) {
      return {
        statusCode: 400,
        message: `Create Restaurant Fail !`,
      };
    }
  };
  getAll = async () => {
    try {
      const restaurants = await restaurantModel.find({});
      return {
        statusCode: 200,
        message: `Get All Restaurant Successfully !`,
        restaurants,
      };
    } catch (error) {
      console.log(error);
    }
  };
  getDetailsRestaurant = async (id) => {
    try {
      const restaurant = await restaurantModel.find({ idResOrSpa: id });
      return {
        statusCode: 200,
        message: `Get  Restaurant Details Successfully !`,
        restaurant,
      };
    } catch (error) {}
  };
  updateSpa = async ({ name, arrType, description, benefit, id }) => {
    try {
      await restaurantModel.findByIdAndUpdate(id, {
        name,
        arrType,
        description,
        benefit,
      });
      return {
        statusCode: 200,
        message: "Update Restaurant Successfully !",
      };
    } catch (error) {
      return {
        statusCode: 400,
        message: "Update Restaurant Fail !",
      };
    }
  };
  deleteSpa = async (id) => {
    console.log(id);
    try {
      await restaurantModel.findByIdAndDelete(id);
      return {
        statusCode: 200,
        message: "Delete Restaurant Successfully !",
      };
    } catch (error) {
      return {
        statusCode: 400,
        message: "Delete Restaurant Fail !",
      };
    }
  };
}
module.exports = new Spa();
