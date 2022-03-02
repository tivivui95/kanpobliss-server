require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const database = require("./connectDb/connect.db");
const route = require("./routes/index");
const cors = require("cors");
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers");
  next();
});
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
database.connect();
route.run(app);
app.listen(PORT, () => {
  console.log(`App is running on link http://localhost:${PORT}`);
});
