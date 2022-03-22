const spaModel = require("./../models/spa.model");
class Spa {
  create = async ({ idResOrSpa, name, arrType, description, benefit }) => {
    try {
      await spaModel.create({
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
      const restaurants = await spaModel.find({});
      return {
        statusCode: 200,
        message: `Get All Restaurant Successfully !`,
        restaurants,
      };
    } catch (error) {
      console.log(error);
    }
  };
  getDetailsSpa = async (id) => {
    try {
      const restaurant = await spaModel.find({ idResOrSpa: id });
      return {
        statusCode: 200,
        message: `Get  Restaurant Details Successfully !`,
        restaurant,
      };
    } catch (error) {}
  };
  updateSpa = async ({ name, arrType, description, benefit, id }) => {
    try {
      await spaModel.findByIdAndUpdate(id, {
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
      await spaModel.findByIdAndDelete(id);
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
