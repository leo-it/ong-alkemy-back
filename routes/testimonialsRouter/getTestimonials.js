const express = require("express");
const router = express.Router();
const getTestimonialsController = require("../../controllers/testimonialsControllers/getTestimonialsController");

router.get("/", /*middlewareAdmin*/ getTestimonialsController);

module.exports = router;
