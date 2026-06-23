const express = require("express");

const router = express.Router();

const getHealth = require("../controllerts/healthcontroller");

router.get("/health",getHealth);

module.exports = router;