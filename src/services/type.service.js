const typeModel = require("./../models/types.model");
class Type {
  createType = async (name) => {
    console.log(name);
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
      console.log(error);
      return {
        statusCode: 400,
        message: `create type fail`,
      };
    }
  };
  getAllType = async () => {
    try {
      const types = await typeModel.find({});

      if (types) {
        return {
          statusCode: 200,
          types: types,
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
  updateType = async ({ id, name }) => {
    try {
      if (!name) {
        return {
          statusCode: 400,
          message: `name fiel cannot empty !!!`,
        };
      }
      await typeModel.findByIdAndUpdate(id, { name });
      return {
        statusCode: 200,
        message: `Update type success`,
      };
    } catch (error) {
      return {
        statusCode: 400,
        message: `name fiel cannot empty !!!`,
      };
    }
  };
  deleteType = async (id) => {
    try {
      const findType = await typeModel.findOne({ _id: id });
      if (!findType) {
        return {
          statusCode: 400,
          message: `delete type fail `,
        };
      }
      await typeModel.findByIdAndDelete(id);
      return {
        statusCode: 200,
        message: `delete type success `,
      };
    } catch (error) {
      return {
        statusCode: 400,
        message: `delete type fail `,
      };
    }
  };
}
module.exports = new Type();
