const partnerModel = require("./../models/partner.model");
const authen = require("./../authentication/authenCreateAccount");
const hotelsModel = require("./../models/hotels.model");
const mongoose = require("mongoose");
const hotels = require("./../models/hotels.model");
class Partner {
  createPartner = async ({
    type,
    name,
    phone,
    location,
    images,
    email,
    arrayTotalTypeManage,
  }) => {
    try {
      // const result = await authen.authenCreateAccounts({ email });
      // if (result.error) {
      //   return result;
      // }
      // const findHotels = await hotelsModel.findOne({ email });
      // if (!findHotels) {
      //   return {
      //     statusCode: 400,
      //     message: `Hotel has not been created, please create hotel before creating partners`,
      //   };
      // }
      // const findPartner = await partnerModel.findOne({ email });
      // console.log(findPartner);
      // if (findPartner) {
      //   return {
      //     statusCode: 400,
      //     message: `Partner already exists in the system, please update, do not create new !!!`,
      //   };
      // }
      // console.log(arrayTotalTypeManage);
      // arrayTotalTypeManage.forEach((type, index) => {
      //   arrayTotalTypeManage[index].list.forEach((to, i) => {
      //     to._id = mongoose.Types.ObjectId();
      //   });
      // });
      // const rs = await partnerModel.find({
      //   "recommend._id": "622ee9bc5f95cfa1602a6799",
      // });
      // console.log("rs", rs);

      partnerModel.find(
        {
          $or: [
            { recommend: { $elemMatch: { _id: "622edbdbf1a9ad7d2aba4107" } } },
            {
              "recommend.list": {
                "#elemMatch": { id: "622ee9bc5f95cfa1602a6794" },
              },
            },
          ],
        },
        (err, res) => {
          if (err) {
            console.log(er);
            return;
          }
          console.log(res);
        }
      );
      return;
      await partnerModel.create({
        type,
        name,
        phone,
        location,
        images,
        // idHotel: findHotels._id,
        email,
        recommend: arrayTotalTypeManage,
      });
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
  updatePartner = async ({ name, id, type, phone, location, images }) => {
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
        phone,
        location,
        images,
      });
      return {
        statusCode: 200,
        message: `Update partner success`,
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 400,
        message: `Update partner fail`,
      };
    }
  };
  getAllPartner = async (id) => {
    id = id ? id : 1;
    try {
      const paginate = 10;
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
        message: `Get all accounts fail !`,
      };
    }
  };
}
module.exports = new Partner();
