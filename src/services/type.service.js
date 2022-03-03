const typeModel = require("./../models/types.model");
class Type {
  createType = async (name) => {
    try {
      if (!name) {
        return {
          statusCode: 400,
          message: `create type fail`,
        };
      }
      await typeModel.create({ name });
      return {
        statusCode: 200,
        message: `create type success`,
      };
    } catch (error) {
      return {
        statusCode: 400,
        message: `create type fail`,
      };
    }
  };
  getAllType = async () => {
    try {
      const types = await typeModel
        .find({})
    
      if (types) {
        return {
          statusCode: 200,
          type: types,
        };
      }
    } catch (error) {
      console.log(error);
      return {
        statusCode: 400,
        message: `get all types fail !`,
      };
    }
  };
}
module.exports = new Type();
