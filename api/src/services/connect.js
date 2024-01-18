const express = require("express");
const mysql = require("mysql");



const app = express();
require("dotenv").config();

var con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

con.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

module.exports = con;
