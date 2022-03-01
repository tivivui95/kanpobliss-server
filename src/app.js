require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const database = require("./connectDb/connect.db");
const route = require("./routes/index");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
database.connect();
route.run(app);
app.listen(PORT, () => {
  console.log(`App is running on link http://localhost:${PORT}`);
});
