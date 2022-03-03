const partnerModel = require("./../models/partner.model");
class Partner {
  createPartner = async ({ name, objType, phone, location }) => {
    try {
      if (!name || !objType || !phone || !location) {
        return {
          statusCode: 400,
          message: `name, objType, phone, location fiels cannot empty !!!`,
        };
      }
      await partnerModel.create({ name, type, phone, location });
      return {
        statusCode: 200,
        message: `create partner success `,
      };
    } catch (error) {
      return {
        statusCode: 400,
        message: `create partner fail !`,
      };
    }
  };
  destroyPartner = async (id) => {
    try {
      const findPartner = await partnerModel.findOne({ _id: id });
      if (findPartner) {
        await partnerModel.findByIdAndDelete(id);
        return {
          statusCode: 200,
          messgae: `delete partner success`,
        };
      }
      return {
        statusCode: 400,
        message: `delete partner fail `,
      };
    } catch (error) {
      return {
        statusCode: 400,
        message: `delete partner fail `,
      };
    }
  };
  updatePartner = async ({ name, id, type, phone, location }) => {
    console.log(id);
    try {
      if (!id) {
        return {
          statusCode: 400,
          message: `update partner fail`,
        };
      }
      await partnerModel.findByIdAndUpdate(id, {
        name,
        type,
        phone,
        location,
      });
      return {
        statusCode: 200,
        message: `update partner success`,
      };
    } catch (error) {
      return {
        statusCode: 400,
        message: `update partner fail`,
      };
    }
  };
  getAllPartner = async (id) => {
    try {
      const paginate = 5;
      const allPartner = await partnerModel
        .find({})
        .skip((id - 1) * paginate)
        .limit(paginate);
      if (allPartner) {
        return {
          statusCode: 200,
          partners: allPartner,
        };
      }
    } catch (error) {
      return {
        statusCode: 400,
        message: `get all accounts fail !`,
      };
    }
  };
}
module.exports = new Partner();
