const express = require("express");
const router = express.Router();
const { registerUser } = require("../Controllers/usercontroller");



router.post("/auth/register",registerUser);

module.exports = router;
