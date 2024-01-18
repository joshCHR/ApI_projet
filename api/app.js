require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const UserRoutes = require("./src/routes/Users");
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () =>
  console.log(`listening on port http://localhost:${port}`)
);
app.use(express.static("public"));

app.use(UserRoutes);
