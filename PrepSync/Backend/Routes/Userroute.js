const express = require("express");
const user = require("../Controllers/usercontroller");
const router = express.Router();

router.post("/",user);

module.exports = router;
