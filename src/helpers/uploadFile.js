const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req);
    console.log(file);
    cb(null, "src/public");
  },
  filename: (req, file, cb) => {
    console.log("req", req);
    console.log(file);
    cb(null, file.fieldname + "__" + Date.now() + "__" + file.originalname);
  },
});
module.exports = multer({ storage });
