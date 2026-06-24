const express = require("express");

const router = express.Router();

const getHealth = require("../Controllers/healthcontroller");

router.get("/",getHealth.getHealth);

router.post("/",getHealth.postHealth);

module.exports = router;