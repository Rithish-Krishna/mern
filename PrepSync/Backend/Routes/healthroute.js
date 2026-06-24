const express = require("express");

const router = express.Router();

const getHealth = require("../Controllers/healthcontroller");

router.get("/health",getHealth.getHealth);

module.exports = router;