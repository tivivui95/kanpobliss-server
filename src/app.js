require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const database = require("./connectDb/connect.db");
const route = require("./routes/index");
const cors = require("cors");
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});
app.use(
  cors({
    origin: "https://booking-client-project.herokuapp.com",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
database.connect();
route.run(app);
app.listen(PORT, () => {
  console.log(`App is running on link http://localhost:${PORT}`);
});
