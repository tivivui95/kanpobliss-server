const authen = require("./../authentication/authenCreateAccount");
const recommendModel = require("./../models/recommend.model");
const partnerModel = require("./../models/partner.model");
const mongoose = require("mongoose");
class Recommend {
  create = async (arr) => {
    console.log(arr);
    const newArr = [];
    try {
      for (let i = 0; i < arr.length; i++) {
        const findPartner = await partnerModel.findOne({ email: arr[i].email });
        if (!findPartner) {
          return {
            statusCode: 403,
            message: `Partner not found`,
          };
        }
        const result = await authen.authenCreateAccounts({
          email: arr[i].email,
        });
        if (result.error) {
          return result;
        }
        let obj = {};
        const length = arr[i].list.length;
        for (let j = 0; j < length; j++) {
          arr[i].list[j]._id = new mongoose.Types.ObjectId();
          obj = {
            name: arr[i].name,
            email: arr[i].email,
            list: [{}],
          };
        }
        newArr.push(arr[i]);
      }
      await recommendModel.create(arr);
      console.log(`Create Recommend Successfully`);
      return {
        statusCode: 200,
        message: `Create Recommend Successfully !`,
      };
    } catch (error) {
      return {
        statusCode: 400,
        message: `Create Recommend Fail !`,
      };
    }
  };
  getAllRecommend = async () => {
    try {
      const result = await recommendModel.find({});
      return {
        statusCode: 200,
        result,
      };
    } catch (error) {
      console.log(error);
    }
  };
  deleteChildren = async (id, idC) => {
    try {
      const recommend = await recommendModel.findById(id);
      let findId = null;
      recommend.list.forEach((e, i) => {
        if (e._id == idC) {
          findId = i;
        }
      });
      recommend.list.splice(findId, 1);
      await recommendModel.findByIdAndUpdate(id, recommend);
      return {
        statusCode: 200,
        message: "Delete Successfully !",
      };
    } catch (error) {
      console.log(error);
    }
  };
  updateChildren = async (
    id,
    idC,
    { name, price, description, ingredient, reason }
  ) => {
    console.log(id, idC);
    try {
      const arr = [name, price, description, reason, ingredient];
      const recommend = await recommendModel.findById(id);
      recommend.list.forEach((e, i) => {
        if (e._id == idC) {
          const key = Object.keys(e);
          for (let j = 0; j < key.length; j++) {
            recommend.list[i][key[j]] = arr[j];
            console.log(recommend.list[i][key[j]]);
          }
        }
      });
      // console.log(recommend);
      await recommendModel.findByIdAndUpdate(id, recommend);
      return {
        statusCode: 200,
        message: "Delete Successfully !",
      };
    } catch (error) {
      console.log(error);
    }
  };
  updateRecommend = async (nameR, idR, email) => {
    try {
      await recommendModel.findByIdAndUpdate(idR, { name: nameR, email });
      return {
        statusCode: 200,
        message: "Update Success !",
      };
    } catch (error) {
      console.log(error);
    }
  };
  deleteRecommendReal = async (id) => {
    try {
      await recommendModel.findByIdAndDelete(id);
      return {
        statusCode: 200,
        message: "Delete Success !",
      };
    } catch (error) {
      return {
        statusCode: 400,
        message: "Delete Teo",
      };
    }
  };
}
module.exports = new Recommend();
