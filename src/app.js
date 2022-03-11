require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const database = require("./connectDb/connect.db");
const route = require("./routes/index");
const cors = require("cors");
const upload = require("./helpers/uploadFile");
const imageModel = require("./models/image");
app.post("/upload", upload.single("file"), async (req, res) => {
  console.log(req.file);
  try {
    await imageModel.create({ image: req.file.filename });
    console.log(`save success`);
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  return res.json({
    message: `hello world`,
  });
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
database.connect();

app.use("/image", express.static("src/public"));
app.get("/image/:id", async (req, res) => {
  const { id } = req.params;
  const findImageById = await imageModel.findOne({ _id: id });
  if (findImageById)
    res.send(
      `https://booking-server-project.herokuapp.com/image/${findImageById.image}`
    );
});
route.run(app);
app.listen(PORT, () => {
  console.log(`App is running on link http://localhost:${PORT}`);
});
