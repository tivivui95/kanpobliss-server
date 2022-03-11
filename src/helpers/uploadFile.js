const multer = require("multer");
const path = require("path");
console.log(123);
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/public");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.fieldname + "__" + Date.now() + "__" + file.originalname);
  },
});
module.exports = multer({ storage });
