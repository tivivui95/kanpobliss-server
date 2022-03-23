const restaurantModel = require("./../models/restaurant.model");
const mongoose = require("mongoose");
const imgF = require("./../helpers/functionHandleCreateImg");
const imagesModel = require("./../models/image");
class Restaurant {
  create = async ({
    idResOrSpa,
    name,
    arrType,
    description,
    benefit,
    images,
  }) => {
    try {
      const result = await restaurantModel.create({
        idResOrSpa,
        name,
        arrType,
        description,
        benefit,
      });
      await imgF.saveImg(images, result);
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
      let res = await restaurantModel.find({ idResOrSpa: id });
      const restaurant = await imgF.getImg(res);
      return {
        statusCode: 200,
        message: `Get  Restaurant Details Successfully !`,
        restaurant,
      };
    } catch (error) {
      console.log(error);
    }
  };
  updateRes = async ({ name, arrType, description, benefit, id, images }) => {
    try {
      const result = await restaurantModel.findByIdAndUpdate(id, {
        name,
        arrType,
        description,
        benefit,
      });
      await imgF.saveImg(images, result);
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
  deleteRes = async (id) => {
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
module.exports = new Restaurant();
