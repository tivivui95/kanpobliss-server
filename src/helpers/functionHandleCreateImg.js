const imagesModel = require("./../models/image");
module.exports = {
  saveImg: async (imgList, object) => {
    imgList.forEach(async (image) => {
      await imagesModel.create({ image: image.name, idRef: object._id });
    });
  },
  getImg: async (res) => {
    const restaurant = [];
    for (let i = 0; i < res.length; i++) {
      const findImg = await imagesModel.find({ idRef: res[i]._id });
      res[i].images = findImg;
      restaurant.push(res[i]);
    }
    return restaurant;
  },
};
