const recommendAllModel = require("../models/recommendAll");
class RecommendAll {
  create = async (name, list) => {
    try {
      await recommendAllModel.create({ name, list });
      return {
        statusCode: 200,
        message: "Create Recommend Successfully !",
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 400,
        message: "Create Recommend Fail !",
      };
    }
  };
}
module.exports = new RecommendAll();
