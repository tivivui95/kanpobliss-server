const Joi = require("joi");
module.exports = {
  authenCreateAccounts: async ({
    fullname,
    email,
    phone,
    username,
    password,
    re_password,
  }) => {
    if (password) {
      const schema = Joi.object({
        fullname: Joi.string().min(3).max(30).required(),
        phone: Joi.string().min(3).max(30).required(),
        password: Joi.string(),
        re_password: Joi.ref("password"),
        username: Joi.string().min(3).max(30).required(),
        email: Joi.string().email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        }),
      });
      try {
        const value = await schema.validateAsync({
          fullname,
          email,
          phone,
          username,
          password,
          re_password,
        });
        return {
          statusCode: 200,
          value,
        };
      } catch (error) {
        return {
          statusCode: 400,
          error,
        };
      }
    } else {
      const schema = Joi.object({
        email: Joi.string().email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        }),
      });
      try {
        const value = await schema.validateAsync({
          email,
        });
        return {
          statusCode: 200,
          value,
        };
      } catch (error) {
        return {
          statusCode: 403,
          error,
        };
      }
    }
  },
};
