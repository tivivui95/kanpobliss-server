const spaModel = require("./../models/spa.model");
const imagesModel = require("./../models/image");
const imgF = require("./../helpers/functionHandleCreateImg");
class Spa {
  create = async ({
    idResOrSpa,
    name,
    arrType,
    description,
    benefit,
    images,
  }) => {
    try {
      const result = await spaModel.create({
        idResOrSpa,
        name,
        arrType,
        description,
        benefit,
      });
      imgF.saveImg(images, result);
      return {
        statusCode: 200,
        message: `Create Restaurant Successfully !`,
      };
    } catch (error) {
      return {
        statusCode: 400,
        message: `Create Spa Fail !`,
      };
    }
  };
  getAll = async () => {
    try {
      const restaurants = await spaModel.find({});
      return {
        statusCode: 200,
        message: `Get All Spa Successfully !`,
        restaurants,
      };
    } catch (error) {
      console.log(error);
    }
  };
  getDetailsSpa = async (id) => {
    try {
      const res = await spaModel.find({ idResOrSpa: id });
      const restaurant = [];
      console.log(res.length);
      for (let i = 0; i < res.length; i++) {
        const findImg = await imagesModel.find({ idRef: res[i]._id });
        res[i].images = findImg;
        restaurant.push(res[i]);
      }
      console.log(restaurant);
      return {
        statusCode: 200,
        message: `Get  Spa Details Successfully !`,
        restaurant,
      };
    } catch (error) {
      console.log(error);
    }
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
        message: "Update Spa Successfully !",
      };
    } catch (error) {
      return {
        statusCode: 400,
        message: "Update Spa Fail !",
      };
    }
  };
  deleteSpa = async (id) => {
    console.log(id);
    try {
      await spaModel.findByIdAndDelete(id);
      return {
        statusCode: 200,
        message: "Delete Spa Successfully !",
      };
    } catch (error) {
      return {
        statusCode: 400,
        message: "Delete Spa Fail !",
      };
    }
  };
  getOne = async (id) => {
    try {
      const spaDetails = await spaModel.findOne({ _id: id });
      return { statusCode: 200, spaDetails };
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = new Spa();
