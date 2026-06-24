const express = require("express");
const route = express.Router();

const paracontroller = require("../Controllers/parametercontroller");

route.get("/user/:userId/book/:bookId",paracontroller.getpara);

module.exports = route;