const partnerModel = require("./../models/partner.model");
const authen = require("./../authentication/authenCreateAccount");
const hotelsModel = require("./../models/hotels.model");
const imagesModel = require("./../models/image");
const imgF = require("./..//helpers/functionHandleCreateImg");
class Partner {
  createPartner = async ({ type, name, images, email, description, linkB }) => {
    try {
      const result = await authen.authenCreateAccounts({ email });
      if (result.error) {
        return result;
      }
      const findHotels = await hotelsModel.findOne({ email });
      if (!findHotels) {
        return {
          statusCode: 400,
          message: `Hotel has not been created, please create hotel before creating partners`,
        };
      }
      console.log(email);
      const results = await partnerModel.create({
        type,
        name,
        idHotel: findHotels._id,
        email,
        description,
        linkB,
      });
      await imgF.saveImg(images, results);
      return {
        statusCode: 200,
        message: `Create partner success `,
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 400,
        message: `Create partner fail !`,
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
          message: `delete partner success`,
        };
      }
      return {
        statusCode: 400,
        message: `delete partner fail `,
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 400,
        message: `delete partner fail `,
      };
    }
  };
  updatePartner = async ({ name, id, type, description, linkB, images }) => {
    console.log(images);
    try {
      if (!id) {
        return {
          statusCode: 400,
          message: `Update partner fail`,
        };
      }
      await partnerModel.findByIdAndUpdate(id, {
        name,
        type,
        description,
        linkB,
        images,
      });
      return {
        statusCode: 200,
        message: `Update partner success`,
      };
    } catch (error) {
      return {
        statusCode: 400,
        message: `Update partner fail`,
      };
    }
  };
  getAllPartner = async (id, type, email) => {
    id = id ? id : 1;
    try {
      const paginate = 10;

      const res = await partnerModel
        .find({ type, email })
        .skip((id - 1) * paginate)
        .limit(paginate);

      const allPartner = await imgF.getImg(res);
      if (allPartner) {
        return {
          statusCode: 200,
          partners: allPartner,
        };
      }
    } catch (error) {
      return {
        statusCode: 400,
        message: `Get all accounts fail !`,
      };
    }
  };
}
module.exports = new Partner();
