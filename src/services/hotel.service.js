const hotel = require("../models/hotels.model");
const authen = require("./../authentication/authenCreateAccount");
class Hotel {
  createHotel = async ({ name, location, phone, email, qr }) => {
    try {
      if (!name || !location || !phone || !email) {
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
      await hotel.create({ name, location, phone, email, qr });
      return {
        statusCode: 200,
        message: `create hotel success!`,
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 400,
        message: `create hotel fail !`,
      };
    }
  };
  destroyeHotel = async (id) => {
    try {
      const findHotel = await hotel.findOne({ _id: id });
      console.log(findHotel);
      if (!findHotel) {
        return {
          statusCode: 400,
          message: `hotel not found`,
        };
      }
      await hotel.findByIdAndDelete({ _id: id });
      return {
        statusCode: 200,
        message: `delete hotel success`,
      };
    } catch (error) {
      return {
        statusCode: 400,
        message: `delete hotel fail`,
      };
    }
  };
  updateHotel = async ({ id, name, location, phone }) => {
    console.log(id);
    try {
      const findHotel = await hotel.findOne({ _id: id });
      if (!findHotel) {
        return {
          statusCode: 400,
          message: `hotel not found`,
        };
      }
      await hotel.findByIdAndUpdate(id, { name, location, phone });
      return {
        statusCode: 200,
        message: `update hotel info success`,
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
      const paginate = 10;
      const allHotels = await hotel
        .find({})
        .skip((id - 1) * paginate)
        .limit(paginate);
      if (allHotels) {
        return {
          statusCode: 200,
          hotels: allHotels,
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
module.exports = new Hotel();
