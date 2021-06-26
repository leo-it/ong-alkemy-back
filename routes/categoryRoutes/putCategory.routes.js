const express = require("express");
const router = express.Router();
const {PUTCategory} = require("../../controllers/categoryControllers/putCategory.controllers");

router.patch("/:id", PUTCategory);

module.exports = router;