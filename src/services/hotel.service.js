const hotel = require("../models/hotels.model");
const authen = require("./../authentication/authenCreateAccount");
const imgF = require("./../helpers/functionHandleCreateImg");
class Hotel {
  createHotel = async ({ name, location, phone, email, qr, images, PartnerID }) => {
    try {
      if (!name || !location || !email) {
        return {
          statusCode: 400,
          message: `Name or location or phone cannot be empty !`,
        };
      }
      const findEmailHotel = await hotel.findOne({ email });
      if (findEmailHotel) {
        return {
          statusCode: 403,
          message: `The account already exists in the system, please re-register`,
        };
      }
      const authenEmail = await authen.authenCreateAccounts({ email });

      if (authenEmail.error) {
        return authenEmail;
      }
      const result = await hotel.create({
        name,
        location,
        phone,
        email,
        qr,
        PartnerID,
      });
      imgF.saveImg(images, result);
      return {
        statusCode: 200,
        message: `Create hotel success!`,
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 400,
        message: `Create hotel fail !`,
      };
    }
  };
  destroyeHotel = async (id) => {
    try {
      const findHotel = await hotel.findOne({ _id: id });
      if (!findHotel) {
        return {
          statusCode: 400,
          message: `Hotel not found`,
        };
      }
      await hotel.findByIdAndDelete({ _id: id });
      return {
        statusCode: 200,
        message: `Delete hotel success`,
      };
    } catch (error) {
      return {
        statusCode: 400,
        message: `Delete hotel fail`,
      };
    }
  };
  updateHotel = async ({ id, name, location, phone, images }) => {
    try {
      const findHotel = await hotel.findOne({ _id: id });
      if (!findHotel) {
        return {
          statusCode: 400,
          message: `Hotel not found`,
        };
      }
      const result = await hotel.findByIdAndUpdate(id, {
        name,
        location,
        phone,
      });
      await imgF.saveImg(images, result);
      return {
        statusCode: 200,
        message: `Update hotel info success`,
      };
    } catch (error) {
      return {
        statusCode: 400,
        message: `hotel not fail`,
      };
    }
  };
  getAllHotels = async (id) => {
    try {
      if (id !== "null") {
        const paginate = 10;
        const res = await hotel
          .find({})
          .skip((id - 1) * paginate)
          .limit(paginate);
        const allHotels = await imgF.getImg(res);
        if (allHotels) {
          return {
            statusCode: 200,
            hotels: allHotels,
          };
        }
      } else {
        const allHotels = await hotel.find({});
        if (allHotels) {
          return {
            statusCode: 200,
            hotels: allHotels,
          };
        }
      }
    } catch (error) {
      return {
        statusCode: 400,
        message: `Get all accounts fail !`,
      };
    }
  };
}
module.exports = new Hotel();
