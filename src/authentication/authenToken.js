const jwt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const info = await jwt.verify(`${authorization}`, process.env.SECRET_KEY);
      console.log("============================================");
      console.log(info);
      if (info) {
        console.log({ info });
        return next();
      }
      return res.json({
        result: {
          stausCode: 403,
        },
      });
    } else {
      return res.json({
        result: {
          statusCode: 403,
          message: "Login error, please login again!",
        },
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      result: {
        statusCode: 403,
        message: "Login error, please login again!",
      },
    });
  }
};
