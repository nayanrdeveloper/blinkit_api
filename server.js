const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());

app.listen(process.env.PORT, () => {
  console.log("Server running on localhost: 8000");
});
